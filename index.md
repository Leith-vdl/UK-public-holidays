---
title: UK Bank Holidays
layout: layout.liquid
---

{% include "nav.liquid" %}

{% include "accordian.liquid" %}

<script>
  async function getCountry() {
    const response = await fetch('https://cold-butterfly-7c04.leith-green.workers.dev/');
    //converts the data to JSON once fetched
    const data = await response.json();
    return data.regionCode
  }

  //waits for the DOM to fully load before executing the script
  document.addEventListener('DOMContentLoaded', async () => {
    const country = await getCountry();
    //gets the user's country from the body data attribute
    // const country = document.body.dataset.country || 'GB-ENG';

    // //maps the correct country code to the corresponding accordion id (England & Wales share)
    const sections = {
      'ENG': 'englandAndWales', 
      'WLS': 'englandAndWales',  
      'SCT': 'scotland',  
      'NIR': 'northernIreland', 
    };
    // Collects the collapse id based on the user's country, or defaults to 'englandAndWales' if country not found
    const sectionId = sections[country] || 'englandAndWales'; 
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

// async function fetchEvents() {
//     try {
//         //retrieves the data from the given URL and waits for it to be fully fetched
//         const response = await fetch('https://purple-pine-028c.leith-green.workers.dev/');
//         //converts the data to JSON once fetched
//         const data = await response.json();

//         //varaible holds the events array and container for the data to be combined
//         const populateEvents = (events, container) => {
//             let lastYear = null;

//             //creates a date for each event and extract the year
//             events.forEach(event => {
//                 const eventDate = new Date(event.date);
//                 const year = eventDate.getFullYear();
                
//                 //checks the year, adds heading element to separate each years events if different
//                 if (year !== lastYear) {
//                     const yearHeader = document.createElement('h5');
//                     yearHeader.innerText = year;
//                     container.appendChild(yearHeader);
//                     lastYear = year; // Update last year
//                 }
//                 //creates a div to store the fetched event data, set it to display in the container
//                 const div = document.createElement('div');
//                 div.innerText = `${event.title} - ${eventDate.toLocaleDateString()}`;
//                 //then adds the element to the DOM so it's visible in the browser
//                 container.appendChild(div);
//             });
//         };
//         //gets correct element for each region and populate with corresponding event data
//         const englandAndWalesBody = document.getElementById('englandAndWalesBody');
//         populateEvents(data['england-and-wales'].events, englandAndWalesBody);

//         const scotlandBody = document.getElementById('scotlandBody');
//         populateEvents(data.scotland.events, scotlandBody);
//         const northernIrelandBody = document.getElementById('northernIrelandBody');
//         populateEvents(data['northern-ireland'].events, northernIrelandBody);

//     //throws an error if the try code is unsuccessful
//     } catch (error) {
//         console.error("Error fetching data: ", error);
//     }
// }

// //calls the function to execute the code and display it in the browser accordion 
// fetchEvents();
</script>