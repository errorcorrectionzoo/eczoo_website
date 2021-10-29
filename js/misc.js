"use strict";

//
// Flash corresponding anchor (citation or footnote) when a link is clicked to
// that point
//
window.addEventListener("load", function() {
    
    // cf. https://stackoverflow.com/a/4642894/1694896
    var getAncestor = function(node, tagName) {
        tagName = tagName.toUpperCase();
        while (node) {
            if (node.nodeType == 1 && node.nodeName == tagName) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    };

    var possible_link_activated_callback = function(event) {
        var a = getAncestor(event.target, "a");
        if (a === null) {
            return;
        }
        var link_target_href = a.getAttribute("href");
        if (link_target_href) {
            if (!link_target_href.startsWith("#")) {
                return;
            }
            var link_target_id = link_target_href.substring(1);
            var link_target = document.getElementById(link_target_id);
            link_target.classList.add("visual-highlight");
            setTimeout(
                (function(link_target){
                    return function() {
                        link_target.classList.remove("visual-highlight");
                    };
                })(link_target),
                1000 // milliseconds
            );
        };
    };

    // It's apparently a good idea to minimize the number of event listeners, so
    // we can set the listener on the #main content element.  The event can be
    // caught there, too.

    document.getElementById('main')
        .addEventListener("click", possible_link_activated_callback);

    // var class_names = [ "cite", "footnote" ];
    // for (var j = 0; j < class_names.length; ++j) {
    //     var class_name = class_names[j];
    //     var a_list = document.getElementsByClassName(class_name);
    //     for (var i = 0; i < a_list.length; ++i) {
    //         var a = a_list[i];
    //         a.addEventListener("click", link_activated_callback);
    //     }
    // }

});
