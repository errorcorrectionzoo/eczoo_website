/*
  Initialize MathJax configuration.
*/

MathJax = {
    tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
        processEnvironments: true,
        processRefs: true,

        // equation numbering on
        tags: 'ams'
    },
    options: {
        // all MathJax content is marked with CSS classes
        processHtmlClass: 'display-math|inline-math',
    }
};


// now load MathJax, it will pick up the above configuration
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.min.js';
  script.async = true;
  document.head.appendChild(script);
})();
