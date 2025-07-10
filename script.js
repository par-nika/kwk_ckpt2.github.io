const extraFacts = [
  "Octopuses have three hearts and blue blood",
  "Sharks existed before trees",
  "Scotland has 421 words for “snow.”",
  "There is a town in Norway where the sun doesn't rise for two months. It's called Tromsø.",
  "The longest hiccuping spree lasted 68 years. Charles Osborne hiccuped continuously from 1922 to 1990",
  "The inventor of the frisbee was turned into a frisbee after he died. His ashes were molded into one.",
];

function generateFact() {
  const fact = extraFacts[Math.floor(Math.random() * extraFacts.length)];
  document.getElementById("new-fact").innerText = fact;
}
