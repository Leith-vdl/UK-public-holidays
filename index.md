---
title: UK Bank Holidays
layout: layout.liquid
---

{%- include "nav.liquid" -%}

{%- include "accordion.liquid"-%}

<script>
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
</script>