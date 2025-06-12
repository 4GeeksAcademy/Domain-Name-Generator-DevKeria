
window.onload = function () {
  const pronouns = ['my', 'your', 'our'];
  const adjectives = ['awesome', 'cool', 'amazing'];
  const nouns = ['website', 'project', 'business'];

  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const domainName = randomPronoun + randomAdjective + randomNoun + '.com';

  console.log(domainName);
};