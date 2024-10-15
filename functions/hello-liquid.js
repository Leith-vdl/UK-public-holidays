import liquidjs from 'https://cdn.jsdelivr.net/npm/liquidjs@10.17.0/+esm'
export async function onRequest(context) {
    const request = context.request;
    console.log('handleRequest', request);
    
  
  
    return new Response("todo - render some markdown in a worker", {
      headers: {
        'Content-Type': 'text/plain',
        // 'Access-Control-Allow-Origin': request.headers.get('origin') not required becuase it's a function same domain
      },
    });
  } 