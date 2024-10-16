
import { Liquid } from 'liquidjs';


export async function onRequest(context) {
    //create a new instance to parse and render the template
    const engine = new Liquid();
    //selects the template and div respectively
    const template = '<h3>{{ name | capitalize | prepend: "Hello "}}</h3> {{ foo }}'
    const userAgent = context.request.headers.get('User-Agent')

    try {

        //turn template into HTML
        const html = await engine.parseAndRender(template, { name: 'Leith', foo: 'userAgent' })

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