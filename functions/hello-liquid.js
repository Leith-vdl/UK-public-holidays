import liquidjs from 'https://cdn.jsdelivr.net/npm/liquidjs@10.17.0/+esm'

const { Liquid } = 'liquidjs';

const template = document.querySelector('[type="text/template"]')
const result = document.querySelector('#result')
const engine = new liquidjs.Liquid()

engine
	.parseAndRender(template.innerHTML, {name: 'liquid'})
	.then(html => result.innerHTML = html)

    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        // 'Access-Control-Allow-Origin': request.headers.get('origin') ...not required becuase it's a function same domain
      },
    });