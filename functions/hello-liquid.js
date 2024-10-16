//imports the liquid templating engine from a CDN (Content Delivery NEtwork)
import liquidjs from 'https://cdn.jsdelivr.net/npm/liquidjs@10.17.0/+esm';



export async function onRequest(context) {
    //extract the Liquid class that has been imported above
    const { Liquid } = liquidjs;

    //create a new instance to parse and render the template
    const engine = new Liquid();
    //selects the template and div respectively
    const template = '<h3>{{ name | capitalize | prepend: "Hello "}}</h3>'

    try {

        //turn template into HTML
        const html = await engine.parseAndRender(template, { name: 'Leith' })

        return new Response(html, {
            headers: {
                'Content-Type': 'text/html',

            },
        });
    } catch (e) {
        return new Response(`error: ${e}`, {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',

            },
        });
    }
} 