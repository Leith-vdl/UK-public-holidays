---
title: UK Bank Holidays
layout: layout.liquid
---

{%- include "nav.liquid" -%}

{%- include "accordion.liquid"-%}

<div id="htmlFromWorker"></div>

<script>
  //includes hello-liquid.js worker function 
  fetch('./functions/hello-liquid.js')
        .then(response => response.text())
        .then(html => {
            document.getElementById('htmlFromWorker').innerHTML = html;
        })
        .catch(error => console.error('Error fetching worker:', error));

  //fetches user location
  async function getCountry() {
    const response = await fetch('/dynamic-display');
    if (!response.ok) 
    {
        console.log(`request failed with status: ${response.status}:${response.statusText}`)
        return 'ENG'
    }
    //converts the data to JSON once fetched
    try {
      const data = await response.json();
      return data.regionCode
    }catch(e) {
        console.log(`failed to parse response: ${e}`)
        return 'ENG'
    }
  }

  //waits for the DOM to fully load before executing the script
  document.addEventListener('DOMContentLoaded', async () => {
    const country = await getCountry();
    //maps the correct ISO country code to the corresponding accordion id (England & Wales share)
    const sections = {
      'ENG': 'englandAndWales',  
      'WLS': 'englandAndWales',  
      'SCT': 'scotland',  
      'NIR': 'northernIreland', 
    };
    // Collects the collapse id based on the user's country, or defaults to 'englandAndWales' if country not found
    const sectionId = sections[country] || 'scotland'; 

    // Selects which accordion section should be shown
    const sectionToShow = document.getElementById(sectionId);

    // If the section exists in the DOM, "show" it on the webpage
    if (sectionToShow) {
      const collapse = sectionToShow.querySelector('.accordion-collapse');
      if (collapse) {
        collapse.classList.add('show');      
      }
    }
  });
  
  //Old js code
  async function fetchEvents() {
    try {
        //retrieves the data from the given URL and waits for it to be fully fetched
        const response = await fetch('fetch-bank-holidays');
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