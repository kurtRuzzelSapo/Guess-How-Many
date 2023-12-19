'use strict';
let answer = Math.trunc(Math.random() * 55) + 1;
let money = 1500;
let highScore = 0;
let prize = 1000;
let takeHome = 0;

//GET RANDOM QUESTION
const randomQuestion = function () {
  let questions = [
    'How many knife can be stabbed on your back? ',
    'How many Illegal drugs did you use?',
    'How many times can you watch a guy killing cat?',
    'How many times will you get punch tonight?',
    'How many pieces of fingers can you eat before declaring yourself a finger eater?',
    'How many glass of beer can you drink tonight?',
    "How many did the 'Guy' killed?",
    'How many cigarette can you fit in your mouth at once?',
    'How many steps will the Guy do before he get you?',
    'How many minutes can you last if you get stabbed tonight?',
    'How many lizards can you fit in your mouth and not spit out?',
    "How many M&M's can you fit in your mouth without chewing?",
    'How many people did the Guy buried alive?',
    'How many people is in the bar right now?',
    'How many tooth will fall out of your mouth tonight?',
    'How many toes will the "Guy" force you to lick tonight?',
    'How many lewd searches did you on the internet yesterday?',
    'How many glass of water can you drink until your stomach explode?',
    'How many people have mysteriously disappeared after leaving this bar late at night?',
    'How many paranormal sightings have been reported within the walls of this bar?',
    'How many people have experienced unexplainable feelings of dread or fear while inside this bar?',
    'How many deaths have occurred on the premises of this bar under mysterious circumstances?',
    "How many urban legends are associated with this bar's dark history?",
    "How many times has the bar's security footage captured unexplained apparitions or ghostly figures?",
    'How many patrons have claimed to hear chilling whispers or voices from unseen entities in this bar?',
    'How many times has the bar staff encountered strange and inexplicable occurrences during their shifts?',
    'How many eerie, unexplained photographs have been taken inside this bar, showing eerie shadows or apparitions?',
    'How many instances of poltergeist activity have been documented in this bar?',
    'How many people have reported being physically touched or pushed by unseen forces while inside this bar?',
    "How many chilling EVP (Electronic Voice Phenomenon) recordings have been captured within the bar's premises?",
    "How many unsolved murders or disappearances are connected to this bar's location throughout its history?",
    'How many people have claimed to see the same ghostly figure lurking in the corners of the bar?',
    "How many times has the bar's temperature suddenly dropped to an unnatural and bone-chilling level?",
    'How many reports of possessions or demonic encounters have been attributed to this bar?',
    'How many times have bar staff found objects mysteriously moving or rearranging themselves when no one is around?',
    'How many former employees have left this bar due to overwhelming fear or unexplained occurrences?',
    'How many individuals have suffered from intense nightmares or terrifying visions after visiting this bar?',
    'How many instances of time distortions or lost time have been reported by patrons who visited this bar?',
  ];

  let randomIndex = Math.floor(Math.random() * questions.length);

  // Get the question from the array using the random index
  let randomQuestion = questions[randomIndex];

  // Display the random question on the page
  let questionElement = document.querySelector('h1');
  questionElement.textContent = ` ${randomQuestion}`;
};

//START BUTTON
document.querySelector('.start').addEventListener('click', function () {
  randomQuestion();
  document.querySelector('h1').style.fontSize =
    window.innerWidth >= 426 ? '3.2rem' : '2rem';
  document.querySelector('.number').style.display = 'block';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.header-info').style.display = 'flex';
  document.querySelector('main').style.display = 'block';
  document.querySelector('.start-container').style.display = 'none';
  document.querySelector('body').style.backgroundImage =
    'url("https://i.gifer.com/QACY.gif")';
  document.querySelector('h1').style.animation = 'fade 1.2s ease-in';
  document.querySelector('.number').style.animation = 'fade 1.2s ease-in';
  // document.querySelector('h1').style.color = 'red';
});
//DISPLAY MESSAGE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // CHECK GUESS IF HIGHER OF LOWER AND IF MONEY IS LESS THAN 100 THEN BLOCK WILL RUN
  //WHEN LOSE
  if (!guess) {
    displayMessage("That's not a valid number.");
    document.querySelector('.number').textContent = '?';
  } else if (guess !== answer) {
    if (money > 100) {
      displayMessage(
        answer > guess
          ? `${guess} is lower, guess higher. `
          : `${guess} is high, guess lower. `
      );
      document.querySelector('.guess').value = '';
      money = money - 100;
      document.querySelector('.money').textContent = money;
      document.querySelector('.message').style.color = 'red';
      document.querySelector('body').style.animation = 'none';
      document.querySelector('.number').style.animation = 'none';
      document.querySelector('h1').style.animation = 'none';
    } else {
      money = money - 100;
      document.querySelector('.money').textContent = money;
      document.querySelector('.number').textContent = answer;
      displayMessage('The guy will come after you.. ');
      document.querySelector('body').style.backgroundColor = '#900603';
      document.querySelector('h1').textContent = " YOU'RE DEAD. ";
      document.querySelector('h1').style.color = 'red';
      document.querySelector('.number').style.color = 'red';
      document.querySelector('.number').style.backgroundColor = 'black';
      document.querySelector('.try').style.display = 'block';
      document.querySelector('.try').style.backgroundColor = 'black';
      document.querySelector('.try').style.color = 'red';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('body').style.backgroundImage =
        'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/047668fb-fcf5-4f67-8225-d13cc4435f67/dcde3j7-f398a328-867a-4d0e-bc90-fb1f87108500.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0NzY2OGZiLWZjZjUtNGY2Ny04MjI1LWQxM2NjNDQzNWY2N1wvZGNkZTNqNy1mMzk4YTMyOC04NjdhLTRkMGUtYmM5MC1mYjFmODcxMDg1MDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3aQ4ICbPEUSPwb7pbJJshdx9kBGGwnHA36GhEP59Qc")';
      document.querySelector('.again').style.display = 'none';
      document.querySelector('.home').style.display = 'none';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.guess').style.display = 'none';
      document.querySelector('.label-score').style.display = 'none';
      document.querySelector('.label-highscore').style.display = 'none';
      document.querySelector('.message').style.fontSize =
        window.innerWidth >= 426 ? '3rem' : '2rem';
      document.querySelector('h1').style.fontSize =
        window.innerWidth >= 426 ? '9rem' : '2rem';
      document.querySelector('body').style.backgroundColor = '#161919';
      document.querySelector('.between').style.display = 'none';
      document.querySelector('body').style.animation = 'fade 1.3s ease-in';
      document.querySelector('.try').style.animation = 'fade 5s ease-in';
    }
    // IF THE GUESS IS EQUAL TO THE ANSWER THEN BLOCK WILL RUN
    //WHEN WIN
  } else if (guess === answer) {
    takeHome = highScore + money + prize;
    if (takeHome >= 10000) {
      document.querySelector('h1').textContent = "You're safe now";
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('h1').style.fontSize =
        window.innerWidth >= 426 ? '8rem' : '2rem';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.guess').style.display = 'none';
      document.querySelector('.home').style.display = 'block';
      document.querySelector('.number').textContent = answer;
      document.querySelector('.highscore').textContent = takeHome;
      document.querySelector('.money').textContent = '0$';
      displayMessage('You paid the guy and let you go to the train station.');
      document.querySelector('.label-score').style.display = 'none';
      document.querySelector('.label-highscore').style.display = 'none';
      document.querySelector('body').style.backgroundColor = '#192064';
      document.querySelector('.home').style.backgroundColor = '#737183';
      document.querySelector('.number').style.backgroundImage = 'none';
      document.querySelector('.number').style.color = '#080810';
      document.querySelector('.home').style.color = 'white';
      document.querySelector('h1').style.color = '#D5BE20';
      document.querySelector('.message').style.color = 'white';
      document.querySelector('body').style.backgroundImage =
        'url("https://i.imgur.com/L9v67vv.gif")';
      document.querySelector('.home').style.animation = 'fade 5.2s ease-in';
      document.querySelector('body').style.animation = 'fade 3.3s ease-in';
      document.querySelector('h1').style.animation = 'none';
      document.querySelector('.message').style.animation = 'none';
    } else {
      document.querySelector('.money').textContent = '0$';
      document.querySelector('.highscore').textContent = takeHome;
      document.querySelector('.number').style.color = '#1F0E1E';
      document.querySelector('body').style.backgroundColor = '#90EE90';
      displayMessage('+500$!!');
      document.querySelector('.message').style.color = 'green';
      document.querySelector('h1').textContent = `You still need ${
        10000 - takeHome
      } to not get killed.`;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = answer;
      document.querySelector('.again').style.display = 'block';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.guess').style.display = 'none';
      document.querySelector('body').style.animation = 'none';
      document.querySelector('h1').style.animation = 'none';
      document.querySelector('.number').style.animation = 'none';
    }
  }
});
//NEXT BUTTON
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('h1').style.animation = 'fade 1.2s ease-in';
  document.querySelector('.number').style.animation = 'fade 1.2s ease-in';
  displayMessage('Can you guess it again?');
  document.querySelector('.message').style.color = 'black';
  document.querySelector('.guess').value = '';
  money = money + prize;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.money').textContent = money;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = '0';
  answer = Math.trunc(Math.random() * 55) + 1;
  console.log(answer);
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('main').style.fontSize =
    window.innerWidth >= 426 ? '2.8rem' : '1.5rem';
  randomQuestion();
});

//GO HOME BUTTON
document.querySelector('.home').addEventListener('click', function () {
  displayMessage('Welcome back to your fucking cozy and home...');
  document.querySelector('h1').textContent = `Nice you're not dead.`;
  document.querySelector('h1');
  document.querySelector('h1').style.fontSize = '3.5rem';
  document.querySelector('body').style.backgroundImage =
    'url("https://cdna.artstation.com/p/assets/images/images/039/867/982/original/pixel-jeff-night2.gif?1627188612")';
  document.querySelector('.number').style.display = 'none';
  document.querySelector('.between').style.display = 'none';
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.try').style.display = 'block';
  document.querySelector('h1').style.color = 'white';
  document.querySelector('.try').style.animation = 'fade 5.2s ease-in';
  document.querySelector('h1').style.animation = 'fade 1.3s ease-in';
  document.querySelector('.message').style.animation = 'fade 1.3s ease-in';
});

//TRY AGAIN BUTTON
document.querySelector('.try').addEventListener('click', function () {
  window.location.reload(true);
});
