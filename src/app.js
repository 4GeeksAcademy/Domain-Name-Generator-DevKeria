
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
     const pronouns = ['my', 'your', 'our'];
     const adjectives = ['awesome', 'cool', 'amazing'];
     const nouns = ['website', 'project', 'business'];

     const domainNames = [];

     for (const pronoun of pronouns) {
       for (const adjective of adjectives) {
         for (const noun of nouns) {
           const domainName = pronoun + adjective + noun + '.com';
           domainNames.push(domainName);
         }
       }
     }

     const outputElement = document.createElement('div');
     domainNames.forEach(domainName => {
       const p = document.createElement('p');
       p.textContent = domainName;
       outputElement.appendChild(p);
     });

     document.body.appendChild(outputElement);
   };