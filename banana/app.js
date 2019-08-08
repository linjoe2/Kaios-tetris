var jokes = [{"Q": "What do bananas say when they answer the phone?",
"A": "Yellow."},
{"Q": "What made the banana such a smoothie?",
"A": "Yogurt!"},
{"Q": "What kinds of jokes do bananas like to tell?",
"A": "Side-splitting ones."},
{"Q": "Where do bananas buy their clothes?",
"A": "Banana Republic."},
{"Q": "Why did the banana get so many Valentines?",
"A": "Because it was really sweet."},
{"Q": "Why didn’t the banana cross the road?",
"A": "Because it’s a banana – it can’t walk!"},
{"Q": "Why did the gorilla eat the banana?",
"A": "Because it’s a gorilla!"},
{"Q": "Why did the boy keep falling off his bike?",
"A": "He slipped off the banana seat."},
{"Q": "What did one banana say to the other when they first met?",
"A": "Yellow, nice to meet you."},
{"Q": "What fruit do sheeps like the most?",
"A": "Baaaaa-nanas."},
{"Q": "How do monkeys get down stairs?",
"A": "They slide down the banana-ster."},
{"Q": "Why couldn’t the whipped cream find the banana at the party?",
"A": "It split."},
{"Q": "What’s yellow and always points north?",
"A": "A magnetic banana."},
{"Q": "Why don’t bananas ever get lonely?",
"A": "They hang around in bunches."},
{"Q": "Why was the plantain sent to the pricipal’s office?",
"A": "It wen’t bananas during class."},
{"Q": "When will the trail mix have enough money to buy a map?",
"A": "After the banana chips in."},
{"Q": "Why did they cancel the ice cream social?",
"A": "The banana split with the ice cream."},
{"Q": "What kind of a key opens a banana?",
"A": "A monkey."},
{"Q": "Which former polititian loves bananas?",
"A": "Al Gore-illa"},
{"Q": "How do you catch King Kong?",
"A": "Climb up a tree and act like a banana."},
{"Q": "What do you do if you see a blue banana?",
"A": "Try to cheer it up."},
{"Q": "Why did the farm hand lose his job on the banana farm?",
"A": "He kept throwing the bent bananas away."},
{"Q": "Why couldn’t the banana yell high?",
"A": "It could only Yellow."},
{"Q": "If a crocodile makes shoes, what does a banana make?",
"A": "Slippers."},
{"Q": "What did the apple say to the green banana?",
"A": "You don’t look like you’re feeling so good…"},
{"Q": "What do you do if you see a blue banana?",
"A": "Try and cheer it up."},
{"Q": "Why did the banana go out with the fig?",
"A": "Because he couldn’t find a date."},
{"Q": "Why was the banana so sick?",
"A": "He had yellow fever."},
{"Q": "What was the ghost’s favorite fruit?",
"A": "Boonanaa."},
{"Q": "Where do bananas go to learn?",
"A": "Sundae school"},
{"Q": "Why did the monkey like the banana?",
"A": "Because it had appeal."},
{"Q": "How is a banana peel on the floor like music?",
"A": "Because if you don’t C sharp you’ll B flat."},
{"Q": "What did the banana say to the elephant?",
"A": "Nothing. Bananas can’t talk."},
{"Q": "How did the unripe banana feel about the ripe banana?",
"A": "It was green with envy."},
{"Q": "What do you call two bananas?",
"A": "A pair of slippers."},
{"Q": "Where did the banana train to become a relay swimmer?",
"A": "In an olympic-sized cereal bowl."},
{"Q": "What is the easiest way to make a banana split?",
"A": "Show it out the door."},
{"Q": "Why did the banana fail it’s driving test?",
"A": "It peeled out."},
{"Q": "What did the banana do when he saw a monkey?",
"A": "It split."},
{"Q": "Why didn’t the young banana go to school this week?",
"A": "Because it didn’t peel well."},
{"Q": "Why wouldn’t the banana cross the road?",
"A": "Because he was yellow."},
{"Q": "Which day of the week do banana’s like the least?",
"A": "Sundae."},
{"Q": "Why did the banana go to the hairdressers?",
"A": "Because it had split ends."},
{"Q": "What do you call banana motorcycle policemen?",
"A": "Banana CHiPs"},
{"Q": "What was the cool banana’s favorite song?",
"A": "Mello Yellow."},
{"Q": "How are cereal bananas like cows?",
"A": "They get milked every morning."},
{"Q": "What did the science teacher say Ba + Na2 is?",
"A": "Banana."},
{"Q": "What instrument did the banana play in the school orchestra?",
"A": "The Cyello."},
{"Q": "Why wasn’t the unripe banana named the starter banana football game?",
"A": "He was too green."},
{"Q": "How did the baby banana become so spoiled?",
"A": "Mama banana left him out in the sun for too long."},
{"Q": "What’s yellow and is used to write letters?",
"A": "A ball-point banana."},
{"Q": "Why did the banana go to see the doctor?",
"A": "The banana was not peeling very well."},
{"Q": "What is yellow and goes bzzzzzzzzt?",
"A": "An electric banana."},
{"Q": "Why don’t bananas snore when they sleep?",
"A": "So they don’t wake up the rest of the bunch."},
{"Q": "Which fruit has the most whole grains?",
"A": "The BRANana."},
{"Q": "Why was the banana so upset?",
"A": "Someone called him a plantain."},
{"Q": "What’s the best thing to put in a banana cream pie?",
"A": "Your teeth!"},
{"Q": "How do bananas travel?",
"A": "In a yellow submarine."},
{"Q": "What is Beethoven’s favorite fruit?",
"A": "Banana..na. Banana..na. (to the melody of the 5th symphony)"},
{"Q": "What is yellow on the inside and green on the outside?",
"A": "A banana dressed up as a zucchini."},
{"Q": "What do fruit use to buy things?",
"A": "Banana bread."}]
var joke = 0

window.addEventListener("load", function() {
  console.log("Hello World!");
});

document.activeElement.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav('hide');
      break;
    case 'ArrowDown':
      nav('show');
      break;
    case 'ArrowRight':
      nav('next');
      break;
    case 'ArrowLeft': 
      nav('back');
      break;
  }
}

function nav (move) {
  if(move ==='next') {joke++;document.getElementById("awnser").innerHTML = '';}
  if(move ==='back') {joke--;document.getElementById("awnser").innerHTML = ''}
  document.getElementById("question").innerHTML = jokes[joke].Q
  if(move ==='show') {document.getElementById("awnser").innerHTML = jokes[joke].A}
  if(move ==='hide') {document.getElementById("awnser").innerHTML = ''}
}
