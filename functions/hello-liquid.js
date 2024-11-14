//import dependencies
import { Liquid } from 'liquidjs';

//request handling function that recieves context as a param (context provided by RE)
export async function onRequest(context) {
    //initialise new instance of the Liquid templating engine
    const engine = new Liquid();

    //creates an empty object, iterates over incoming request headers, normalises them, stores in object
    const headers = {};
    for (const [key, value] of context.request.headers) {
        //normalises header keys by removing hyphens
        headers[key.replace(/-/g, '')] = value;
    }

    //fetches a query parameter from the url, or defaults to 'No param provided' if it's not found
    const queryParam = new URL(context.request.url).searchParams.get('param') || 'No param provided';

    //prepares Cloudflare header data if it's available
    const cfData = context.request.cf || 'data not available';

    //maps the normalised Cloudflare headers to key-value pairs to be displayed as a list
    const cfEntries = Object.entries(cfData).map(([key, value]) => `<li><b>${key}:</b> ${JSON.stringify(value)}</li>`)

    //maps the normalised browser headers to key-value pairs to be displayed as a list
    const headerEntries = Object.entries(headers).map(([key, value]) => `<li><b>${key}:</b> ${JSON.stringify(value)}</li>`)

    //builds the HTML template to display the request data and  variables
    const template = `
    <h2>Hello {{ name | capitalize }}, here are the page's Request Headers, as well as the Cloudflare Request Data and an example of a Query Parameter:</h2>
    <h3>Request Headers:</h3>
    <ul>${headerEntries}</ul>
    <br>
    <p><b>Query Parameter: </b>{{ qParam }}</p>
    <br>
    <h3>Cloudflare Request Data:</h3>
    <ul>${cfEntries}</ul>
    `;

    try {
        //if its passes, renders the template as HTML using the liquid templating engine to be displayed in the bowser
        const html = await engine.parseAndRender(template, {
            name: 'leith',
            //spreads the headers into the template context
            ...headers,
            qParam: queryParam,
        });

        //retuens the renderd HTML as a response with the correct content type (html text)
        return new Response(html, {
            headers: { 'Content-Type': 'text/html' },
        });
        //this code throws in case of an error, displaying the error code in the browser as plain text
    } catch (e) {
        return new Response(`error: ${e}`, {
            status: 500,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
}



// This code is a serverless function written in JavaScript, 
// designed to handle incoming HTTP requests using the Liquid templating engine. 
// It processes the requests, extracts information, and generates an HTML response
// in the form of a list oif key values.