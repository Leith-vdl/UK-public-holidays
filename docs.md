---
title: Documentation
layout: layout.njk
---

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">UK Bank Holidays</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/docs/index.html/">Documentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/techStack/index.html/">Tech Stack</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br>

# Documentation
<br>

---

<h5>This site provides the user with groups of bank holidays for residents of the United Kingdom. The events are separated by location (England & Wales, Scotland, and Northern Ireland respectively) and filtered so that only future bank holidays will be displayed on the page. 
<br>
<br>
The site is built using the 11ty static site generator and employs languages such as Markdown, JavaScript, and HTML. Styling elements are handled using the Bootstrap framework, with smaller sections modified using CSS.  
<br>
<br>
The webpage is hosted using CloudFlare, and takes advantage of CloudFlare Workers to handle tasks such as the importing of JSON data from an external API, and displaying that content dynamically to the user based on their location within the UK (or defaulting to England & Wales if accessing the site from outside the UK). 
<br>
<br>
The site should not require further maintenance, assuming that the GOV.uk API is updated with future bank holiday dates, the webpage and its workers will continue to filter and display them indefinitely. </h5>

---

<p class="footerText">Copyright © 2021 - 2024 Lorem Ipsum®. All rights reserved.</p>