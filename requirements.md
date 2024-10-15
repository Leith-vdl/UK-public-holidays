Functional Requirements (FRs):
Display Bank Holidays by Region: The site must provide information on bank holidays for different regions within the United Kingdom, specifically England & Wales, Scotland, and Northern Ireland.

Display Future Bank Holidays Only: The site must filter and display only future bank holidays on the page.

Dynamic Content Display Based on Location: The site must dynamically determine the user's location within the UK and display bank holidays for the corresponding region, defaulting to "England & Wales" if the user is outside the UK.

Data sourced from External API: The site must be capable of retrieve JSON data from an external API, specifically the GOV.uk API, to retrieve bank holiday data.

-- SEO must be static


Non-Functional Requirements (NFRs):
Technology Stack:

The site must be built using the 11ty static site generator, with content authored in Markdown, JavaScript, and HTML.
The styling of the webpage must be handled using the Bootstrap framework, with additional modifications made using CSS.
Hosting & Deployment:

The site must be hosted using CloudFlare and use CloudFlare Workers to manage tasks like importing JSON data from the external API and displaying content dynamically.
Availability & Reliability:

The site should be designed to operate indefinitely without requiring ongoing maintenance, assuming that the GOV.uk API continues to be updated with future bank holiday dates.
Scalability:

The site must be able to handle data changes or updates dynamically based on updated content from the GOV.uk API without requiring manual intervention.
Performance:

The site should maintain efficient performance with the ability to dynamically display content quickly based on a user’s geographical location, leveraging CloudFlare Workers for optimized data handling.
Maintainability:

The site must require minimal maintenance, relying solely on the continued updates from the external API for bank holiday information.
Security:

All interactions involving external data (e.g., JSON data fetching) must be secured, particularly since the data is imported through CloudFlare Workers, to prevent unauthorized modification or access.