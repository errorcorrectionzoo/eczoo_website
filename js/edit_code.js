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
        console.log("Get json with path = "+path+": "+xmlhttp.status);
        var text = xmlhttp.responseText;
        console.log(text);
        return JSON.parse(text);
    }

    var refs = {};

    var fetch_refs_schemas = [
        ['/schemas/ecc', 'schemas/ecc.json'],
        ['/schemas/ecc_features', 'schemas/ecc_features.json'],
        ['/schemas/ecc_relation_list', 'schemas/ecc_relation_list.json'],
        ['/schemas/ecc_space', 'schemas/ecc_space.json']
    ];
    for (var j = 0; j < fetch_refs_schemas.length; ++j) {
        var the_schema_name = fetch_refs_schemas[j][0];
        var the_schema_json_path = fetch_refs_schemas[j][1];
        refs[the_schema_name] = fetch_load_json(the_schema_json_path);
    }
    console.log('refs=', refs);

    var all_codes_info = fetch_load_json('dat/all_codes_info_dump.json');

    // set all string properties to 'textarea' format
    var set_string_textarea_properties = function (obj) {
        if (obj.type == 'object') {
            if (obj.hasOwnProperty('properties')) {
                for (var key in obj.properties) {
                    set_string_textarea_properties(obj.properties[key]);
                }
            }
        } else if (obj.type == 'array') {
            if (obj.hasOwnProperty('items')) {
                set_string_textarea_properties(obj.items);
            }
        } else if (obj.type == 'string') {
            if (!obj.hasOwnProperty('_single_line_string') || !obj._single_line_string) {
                obj.format = 'textarea';
            }
        }
    };
    for (var schema_name in refs) {
        var schema_obj = refs[schema_name];
        //console.log('schema_obj=', schema_obj);
        set_string_textarea_properties(schema_obj);
        //console.log('--> schema_obj=', schema_obj);
    }
    //code_schema.properties.relations.properties.parents.items.properties.detail.format = 'textarea';
    //code_schema.properties.relations.properties.cousins.items.properties.detail.format = 'textarea';
    //console.log(code_schema);

    var cur_code_info = all_codes_info[code_id];
    console.log(cur_code_info); // is undefined if no code was set

    var editor = new JSONEditor(
        install_in_element,
        {
            schema: refs['/schemas/ecc'],
            ajax: true,
            startval: cur_code_info,
            form_name_root: 'ecc',

            refs: refs,

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
