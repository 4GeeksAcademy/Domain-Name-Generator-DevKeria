import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const pronouns = ['my', 'your', 'our'];
  const adjectives = ['awesome', 'cool', 'amazing'];
  const nouns = ['website', 'project', 'business'];

  
  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const domainName = randomPronoun + randomAdjective + randomNoun + '.com';

 
  const outputElement = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = domainName;
  outputElement.appendChild(p);

  document.body.appendChild(outputElement);
};