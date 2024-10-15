export async function onRequest(context) {
    const request = context.request;
    console.log('handleRequest', request);
    
    const country = request.cf?.country || 'GB-ENG';
  
    const resultObject = {
      country: country,
      regionCode: request.cf?.region || 'N/A',
      cf: request.cf,
    };
  
    const responseBody = JSON.stringify(resultObject);
  
    return new Response(responseBody, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': request.headers.get('origin')
      },
    });
  } 