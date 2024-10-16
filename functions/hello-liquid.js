import { Liquid } from 'liquidjs';

export async function onRequest(context) {
    //create a new instance to parse and render the template
    const engine = new Liquid();

    //selects the template and div respectively
    const template = `
    <h3>Hello {{ name | capitalize }}, here are all of your browser headers:</h3>
    <p><b>Accept:</b> {{ accept }}</p>
    <p><b>Accept-Encoding:</b> {{ accEncode }}</p>
    <p><b>Accept-Language:</b> {{ accLang }}</p>
    <p><b>Cache-Control:</b> {{ cacheCont }}</p>
    <p><b>Connection:</b> {{ conn }}</p>
    <p><b>Host:</b> {{ bHost }}</p>
    <p><b>Sec-Ch-Ua:</b> {{ sCU }}</p>
    <p><b>Sec-Ch-Ua-Mobile:</b> {{ sCUMobile }}</p>
    <p><b>Sec-Ch-Ua-Platform:</b> {{ sCUPlat }}</p>
    <p><b>Sec-Fetch-Dest:</b> {{ sFD }}</p>
    <p><b>Sec-Fetch-Mode:</b> {{ sFM }}</p>
    <p><b>Sec-Fetch-Site:</b> {{ sFS }}</p>
    <p><b>Sec-Fetch-User:</b> {{ sFU }}</p>
    <p><b>Upgrade-Insecure-Requests:</b>  {{ uIR }}</p>
    <p><b>User-Agent:</b> {{ agent }}</p>
    <h1>User Information:</h1>
    <p><b>Name:</b> {{ queryName }}</p>
    <p><b>Age:</b> {{ QueryAge }}</p>
     `
    const browserAccept = context.request.headers.get('Accept')
    const acceptEncoding = context.request.headers.get('Accept-Encoding')
    const acceptlanguage = context.request.headers.get('Accept-Language')
    const cacheControl = context.request.headers.get('Cache-Control')
    const browserConnection = context.request.headers.get('Connection')
    const browserHost = context.request.headers.get('Host')
    const SecChuUa = context.request.headers.get('Sec-Ch-Ua')
    const SecChuUaMobile = context.request.headers.get('Sec-Ch-Ua-Mobile')
    const SecChuUaPlatform = context.request.headers.get('Sec-Ch-Ua-Platform')
    const SecFetchDest = context.request.headers.get('Sec-Fetch-Dest')
    const SecFetchMode = context.request.headers.get('Sec-Fetch-Mode')
    const SecFetchSite = context.request.headers.get('Sec-Fetch-Site')
    const SecFetchUser = context.request.headers.get('Sec-Fetch-User')
    const upgradeInsecureRequests = context.request.headers.get('Upgrade-Insecure-Requests')
    const userAgent = context.request.headers.get('User-Agent')

    //parse query parameters
    const url = new URL(context.request,url);
    const queryName = url.searchParams.get('name' || 'Guest');
    const queryAge = url.searchParams.get('Age' || 'Unknown');


    try {
        //turn template into HTML
        const html = await engine.parseAndRender(template, 
            { name: 'leith', 
                agent: userAgent, 
                accept: browserAccept, 
                accEncode: acceptEncoding,
                accLang: acceptlanguage, 
                cacheCont: cacheControl, 
                conn: browserConnection, 
                bHost: browserHost,
                sCU: SecChuUa, 
                sCUMobile: SecChuUaMobile, 
                sCUPlat: SecChuUaPlatform, 
                sFD: SecFetchDest,
                sFM: SecFetchMode, 
                sFS: SecFetchSite, 
                sFU: SecFetchUser, 
                uIR: upgradeInsecureRequests,
                queryName, queryAge
             })

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