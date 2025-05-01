import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { ServerHMRConnector } from "vite";

window.onload = function() {
  //write your code here
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
  
  domainNames.forEach(domainName => {
      console.log(domainName);
  }'
