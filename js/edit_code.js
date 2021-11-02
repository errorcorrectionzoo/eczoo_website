"use strict";


window.eczoo_edit_code_setup = function(base_url, install_in_element)
{
    console.log('base_url = ' + base_url);

    //
    // find the code that we are editing
    //
    var url_params = new URLSearchParams(window.location.search);
    var code_id = url_params.get('code_id');

    function fetch_load_json(path) {
        // fetch JSON & wait for result
        var xmlhttp = new XMLHttpRequest();
        // block request until we get the result -- TODO make this async in a
        // proper web app!!
        xmlhttp.open("GET", base_url + path, false);
        xmlhttp.send();
        console.log("Get "+path+": "+xmlhttp.status);
        return JSON.parse(xmlhttp.responseText);
    }

    var code_schema = fetch_load_json('schemas/ecc');
    var all_codes_info = fetch_load_json('_all_codes_info_dump.json');

    code_schema.properties.description.format = 'textarea';
    code_schema.properties.protection.format = 'textarea';
    code_schema.properties.decoder.format = 'textarea';
    code_schema.properties.realizations.format = 'textarea';
    code_schema.properties.notes.items.format = 'textarea';
    code_schema.properties.features.additionalProperties = {
        type: 'string',
        format: 'textarea'
    };
    //code_schema.properties.relations.properties.parents.items.properties.detail.format = 'textarea';
    //code_schema.properties.relations.properties.cousins.items.properties.detail.format = 'textarea';

    console.log(code_schema);

    var cur_code_info = all_codes_info[code_id];
    console.log(cur_code_info)

    var editor = new JSONEditor(
        install_in_element,
        {
            schema: code_schema,
            ajax: true,
            startval: cur_code_info,
            form_name_root: 'ecc',

            theme: 'bootstrap4',
            remove_button_labels: true,
            disable_edit_json: true,
            disable_properties: false, // needed for "features"
            show_opt_in: true,
            iconlib: "spectre" //"fontawesome4"
        }
    );

    // Hook up the submit button to log to the console
    document.getElementById('submit').addEventListener('click',function() {
        // Get the value from the editor
        var value = editor.getValue();
        console.log(value);
        var data = new Blob([JSON.stringify(value)]);
        var a = document.getElementById('a-download-code-json');
        a.setAttribute("download", "code_"+value.code_id+".json");
        a.href = URL.createObjectURL(data);
        a.click();
    });
};
