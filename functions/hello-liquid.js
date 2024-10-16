//imports the liquid templating engine from a CDN (Content Delivery NEtwork)
import liquidjs from 'https://cdn.jsdelivr.net/npm/liquidjs@10.17.0/+esm';

//extract the Liquid class that has been imported above
const { Liquid } = liquidjs;

//create a new instance to parse and render the template
const engine = new Liquid();
//selects the template and div respectively
const template = document.querySelector('[type="text/template"]')
const result = document.querySelector('#result')


//from the LiquidJS library, provides methods (parseAndRender) and handles data
engine
    //object with variables to be passed to the template, promise that returns HTML wehen resolved
	.parseAndRender(template.innerHTML, {name: 'liquid'})
	.then(html => {
        result.innerHTML = html;
        return new Response(html, {
            headers: {
              'Content-Type': 'text/html',
              // 'Access-Control-Allow-Origin': request.headers.get('origin') ...not required becuase it's a function same domain
        }
    });
})
//error handling logs to console if called
.catch(error => {
    console.error( 'Error rendering template:', error);
});
    