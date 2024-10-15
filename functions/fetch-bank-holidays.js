export async function handleRequest(request) {
    const url = "https://www.gov.uk/bank-holidays.json";

    try {
        //fetches the raw JSON data using the API
        const response = await fetch(url);
        const data = await response.json();
        const today = new Date();

        //the country data arrays
        const keys = Object.keys(data); // 
        for (const division of keys) {
            data[division].events = data[division].events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate > today;
            });
        }

        //CORS handling
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": request.headers.get("origin")
            }
        });

    } catch (error) {
        return new Response("Error fetching data: " + error.message, { status: 500 });
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});


