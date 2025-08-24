# Cat API Project

## Description
This project displays data from the Cat API: *images of cats* and *facts about cats*.  
- *Images* page: fetches new cat pictures each time it is loaded.  
- *Facts* page: shows a fixed set of cat facts.  

Navigation links allow switching between pages.

---

## Project Structure
- index.html — Cat images page  
- facts.html — Cat facts page  
- style.css — Styles  
- script.js — JavaScript for API and content display  
- README.md — Project instructions  

---

## How to Run
1. Clone the repository or download the files.  
2. Insert your Cat API key in script.js:
```js
const apiKey = 'live_hAVhOENPCSgNSRH8PdxMthZQeP0z55JiimTEDVhQELPBRoLfHaGsV4qacPMC3b5z';
3.	Start a local server:
	•	Live Server in VS Code: Right-click index.html → Open with Live Server
	•	Or using Python:
            python -m http.server 5500
        Open in browser: http://localhost:5500/index.html

4.	Use navigation links to switch between Images and Facts.

Notes
	•	Images: new pictures each load.
	•	Facts: fixed, consistent for all users.
	•	Meets assignment requirements: two endpoints, navigation, and API interaction.
