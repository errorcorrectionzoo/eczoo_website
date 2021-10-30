pretty_code_graph_setup = function()
{
    var codegraph = {};

    var main_element = document.getElementById('main');

    // https://stackoverflow.com/a/69515082/1694896
    var font_family = window.getComputedStyle(document.body).getPropertyValue('font-family');
    // console.log('font_family=');
    // console.log(font_family);

    codegraph.cy = cytoscape({
        // Main HTML DOM container
        container: main_element, //'cy-code-graph'),

        // the graph data --> loaded by separate, auto-generated JS file
        elements: pretty_code_graph_data.elements,

        // layout: {
        //     // cf. https://js.cytoscape.org/#layouts/cose
        //     name: 'cose',
        //     animate: true,
        //     animationThreshold: 250,
        //     refresh: 20,
        //     fit: true,
        //     padding: 30,
        //     componentSpacing: 40,
        
        //     // Node repulsion (non overlapping) multiplier
        //     nodeRepulsion: function( node ){ return 8192; },
        
        //     // Ideal edge (non nested) length
        //     idealEdgeLength: function( edge ){ return 300; },
        
        //     // Divisor to compute edge forces
        //     edgeElasticity: function( edge ){ return 100000; },
        
        //     nodeOverlap: 4,

        // },

        // layout: { name: 'preset' },

        layout: {
            // cf. https://github.com/iVis-at-Bilkent/cytoscape.js-fcose#api
            name: 'fcose',
            quality: "proof",
            animate: true,
            randomize: true,
            animationDuration: 750,
            animationEasing: undefined,

            nodeDimensionsIncludeLabels: true,

            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: function( node ){ return 4500; },
            // Ideal edge (non nested) length
            idealEdgeLength: function( edge ){ return 80; },
            // Divisor to compute edge forces
            edgeElasticity: function( edge ){ return .45; },

            // fixed node constraints -- root codes
            fixedNodeConstraint: pretty_code_graph_data.fixed_node_constraint,
            alignmentConstraint: pretty_code_graph_data.alignment_constraint
        },

        // layout: {
        //     // cf. https://github.com/iVis-at-Bilkent/cytoscape.js-fcose#api
        //     name: 'cose-bilkent',
        // },

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#7f3000',
                    'label': 'data(label)',
                    'color': '#7f3000',
                    'font-size': '14px',
                    'font-family': font_family,
                    'font-weight': '400'
                }
            },
            {
                selector: 'node[_family_generation_level=0]',
                style: {
                    'background-color': '#5e3834',
                    'label': 'data(label)',
                    'color': '#5e3834',
                    'font-size': '14px',
                    'font-family': font_family,
                    'font-weight': '400'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 1,
                    'opacity': 0.5,
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'label': 'data(label)',
                    'font-size': '12px'
                }
            },
            {
                selector: 'edge[_rel_type="parent"]',
                style: {
                    'width': 1,
                    'line-color': '#00307f',
                    'target-arrow-color': '#00307f',
                    'color': '#00307f'
                }
            },
            {
                selector: 'edge[_rel_type="cousin"]',
                style: {
                    'width': 1,
                    'line-style': 'dotted',
                    'line-color': '#00883f',
                    'target-arrow-color': '#00883f',
                    'color': '#00883f'
                }
            }
        ],

    });

    //
    // the tooltip object
    //

    var tooltip_element = document.createElement("div");
    tooltip_element.setAttribute("id", "code-graph-tooltip");
    tooltip_element.setAttribute("role", "tooltip");
    tooltip_element.innerHTML =
        "<div data-popper-arrow class=\"tooltip-arrow\"></div>"
        + "<div id=\"code-graph-tooltip-contents\"></div>"
        + "<a href=\"javascript:pretty_code_graph_close_tooltip();\" "
           + "class=\"close-tooltip link-button\">close</a>"
    ;
    tooltip_element.style.display = 'none';
    document.body.appendChild(tooltip_element);

    window.pretty_code_graph_close_tooltip = function() {
        tooltip_element.style.display = 'none';
    };
    window.pretty_code_graph_show_tooltip = function() {
        tooltip_element.style.display = 'block';
    };

    var tooltip_contents_element =
        document.getElementById('code-graph-tooltip-contents');

    function generateGetBoundingClientRect(x = 0, y = 0) {
        return () => ({
            width: 0,
            height: 0,
            top: y,
            right: x,
            bottom: y,
            left: x,
        });
    };
    const virtualElement = {
        getBoundingClientRect: generateGetBoundingClientRect(),
    };

    codegraph.popper_obj = Popper.createPopper(
        virtualElement,
        tooltip_element,
        {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8]
                    }
                }
            ]
        }
    )
    
    codegraph.cy.on('tap', function(event) {
        // target holds a reference to the originator
        // of the event (core or element)
        var eventTarget = event.target;

        var obj_id = eventTarget.data().id;
        if ( obj_id && obj_id.startsWith('c_') ) {
            // tap on a code node
            //
            // SURELY there's a better way to detect we've taped on a node object ?!?!
            var node = eventTarget;

            //
            // update tooltip contents
            //
            var node_data = node.data();
            tooltip_contents_element.innerHTML =
                "<span class=\"code-name\">" + node_data.label + "</span>"
                + "<span class=\"code-description\">" + node_data._description + "</span>"
                + "<span class=\"spacer\"> </span><a class=\"code-link\" href=\""
                        + node_data._code_href + "\">go to code →</a>"
            ;

            //
            // update tooltip position & show it
            //
            var base_pos = {
                x: main_element.offsetLeft,
                y: main_element.offsetTop
            };
            var pos = node.renderedPosition();
            virtualElement.getBoundingClientRect =
                generateGetBoundingClientRect(base_pos.x + pos.x - window.pageXOffset,
                                              base_pos.y + pos.y - window.pageYOffset);
            codegraph.popper_obj.update();
            window.pretty_code_graph_show_tooltip();
        } else {
            // tap on an edge or on the background -- hide pop-up
            window.pretty_code_graph_close_tooltip();
        }
    });

};


window.addEventListener("load", function() {
    console.log("setting up pretty code graph");
    pretty_code_graph_setup();
    console.log("pretty code graph setup finished");
});
