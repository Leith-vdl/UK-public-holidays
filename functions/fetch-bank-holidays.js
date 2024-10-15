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


//Old js code

<script>
async function fetchEvents() {
    try {
        //retrieves the data from the given URL and waits for it to be fully fetched
        const response = await fetch('https://purple-pine-028c.leith-green.workers.dev/');
        //converts the data to JSON once fetched
        const data = await response.json();

        //varaible holds the events array and container for the data to be combined
        const populateEvents = (events, container) => {
            let lastYear = null;

            //creates a date for each event and extract the year
            events.forEach(event => {
                const eventDate = new Date(event.date);
                const year = eventDate.getFullYear();
                
                //checks the year, adds heading element to separate each years events if different
                if (year !== lastYear) {
                    const yearHeader = document.createElement('h5');
                    yearHeader.innerText = year;
                    container.appendChild(yearHeader);
                    lastYear = year; // Update last year
                }

                //creates a div to store the fetched event data, set it to display in the container
                const div = document.createElement('div');
                div.innerText = `${event.title} - ${eventDate.toLocaleDateString()}`;
                //then adds the element to the DOM so it's visible in the browser
                container.appendChild(div);
            });
        };

        //gets correct element for each region and populate with corresponding event data
        const englandAndWalesBody = document.getElementById('englandAndWalesBody');
        populateEvents(data['england-and-wales'].events, englandAndWalesBody);

        const scotlandBody = document.getElementById('scotlandBody');
        populateEvents(data.scotland.events, scotlandBody);

        const northernIrelandBody = document.getElementById('northernIrelandBody');
        populateEvents(data['northern-ireland'].events, northernIrelandBody);

    //throws an error if the try code is unsuccessful
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

//calls the function to execute the code and display it in the browser accordion 
fetchEvents();


</script>