---
title: UK Bank Holidays
layout: layout.njk
---

<h1>UK Bank Holidays:</h1>

<div class="accordion" id="eventsAccordion">
    <!-- ENGLAND AND WALES -->
    <div class="accordion-item" id="englandAndWales">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                England and Wales
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#eventsAccordion">
            <div class="accordion-body" id="englandAndWalesBody"></div>
        </div>
    </div>
    <!-- SCOTLAND -->
    <div class="accordion-item" id="scotland">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Scotland
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#eventsAccordion">
            <div class="accordion-body" id="scotlandBody"></div>
        </div>
    </div>
    <!-- NORTHERN IRELAND -->
    <div class="accordion-item" id="northernIreland">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Northern Ireland
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#eventsAccordion">
            <div class="accordion-body" id="northernIrelandBody"></div>
        </div>
    </div>
</div>

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