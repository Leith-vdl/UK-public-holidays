import liquidjs from 'https://cdn.jsdelivr.net/npm/liquidjs@10.17.0/+esm'

const { Liquid } = liquidjs;

//liqid instance
const engine = new Liquid();

//liquid template
const templateString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
</body>
</html>
`;



export async function onRequest(context) {
    const request = context.request;

    const contextData = {
        title: 'todo - render some markdown in a worker',
        description: 'This page is rendered using liquidJS in a worker function'
    };

    //renders the template using the context data
    const html = await engine.parseAndRender(templateString, contextData)
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        // 'Access-Control-Allow-Origin': request.headers.get('origin') not required becuase it's a function same domain
      },
    });
  } 