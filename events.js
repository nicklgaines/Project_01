let room = {};
room = {

  one: {
    context: 'http://www.maycontainspoilers.co.uk/wp-content/uploads/sites/5/2011/08/Two-Doors.jpg', // two doors
    text: 'When Joy came to a set of two open doors, she walked through the door on her left.',
    choices: [['(OBEY)Enter the door on your left', 'moveTo(room.two)'],
              ['(DISOBEY)Enter the door on your right', 'moveTo(room.three)']],
  },
  two: {
    context: '', // two doors
    text: 'Joy arrived in her usual classroom to find no one around. <br> How very strange, maybe they went up that very ordinary looking staircase? Do ignore the Piper',
    choices: [['(OBEY)Take the very ordinary looking stairs[Walk up the stairs]', 'moveTo(room.four)'],
              ['(DISOBEY)Follow the dancing rats[Walk down the stairs]', 'moveTo(room.five)']],
  },
  three: {
    context: '', // two doors
    text: 'I see you are confused. I said left. You went right. This must be some mistake.',
    choices: [['(OBEY)Get back to the main story[Take the open door]', 'moveTo(room.two)'],
              ['(DISOBEY)Continue frivolous exploration', 'moveTo(room.six)']],
  },
  four: {
    context: '', // two doors
    text: 'The stairs were ordinary, but Joy saw that they spiraled into the sky for hundreds of stories. <br>' +
          'Joy paused for a moment, but was having a lovely time mindlessly climbing the stairs and soon resumed her search for her class.',
    choices: [['(OBEY)Continue climbing', 'moveTo(room.seven)'],
              ['(DISOBEY)Step into the open broom closet', 'moveTo(room.eight)']],
  },
  five: {
    context: '', // two doors
    text: 'Joy had apparently never heard of the Black Death and began dancing with the basement rats',
    choices: [['Dance with a heel lead', 'moveTo(room.nine)'],
              ['Dance with a toe lead', 'moveTo(room.ten)']],
  },

  six: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seven: {
    context: '', // two doors
    text: 'After climbing for several hours, Joy found an ornate wooden door almost ten feet tall.<br> Joy rang the door bell, but took care to avoid pushing the giant red button that said \'DO NOT PRESS\' ',
    choices: [['(OBEY) Ring the doorbell', 'moveTo(room.sixteen)'],
              ['(DISOBEY)You know what you want to do [Push the red button]', 'moveTo(room.twentySix)']],
  },

  eight: {
    context: '', // two doors
    text: 'Um...ok. Joy walked into the broom closet and admired the broom lying on the floor.',
    choices: [['(OBEY) Return to the climb', 'moveTo(room.seven)'],
              ['(DISOBEY) Remain in the broom closet', 'moveTo(room.sixtySeven)'],
              ['(PANIC) Contemplate suicide', 'moveTo(room.sixtyEight)']],
  },

  nine: {
    context: '', // two doors
    text: 'The Piper admires your grace. He invites you to dine with his rats.',
    choices: [['(OBEY) Join the Piper for dinner', 'moveTo(room.eleven)'],
              ['(DISOBEY) Throw acid in the Piper\'s face', 'moveTo(room.fiftySeven)']],
  },

  ten: {
    context: '', // two doors
    text: 'The Piper does not enjoy your dancing. You are fed to the rats. <br> [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  eleven: {
    context: '', // two doors
    text: 'You enjoy a lovely evening with the Pied Piper of Pied Pipers',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twelve: {
    context: '', // two doors
    text: 'The acid works! The rats and the Piper are dead. You regret the senseless violence.',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirteen: {
    context: '', // two doors
    text: 'The Piper pulls a switch and you fall into the Rancor-Rat Pit. You are not a Jedi. <br> [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fourteen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
  fifteen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
  sixteen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seventeen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  eighteen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  nineteen: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twenty: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyThree: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyFour: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyFive: {
    context: '', // two doors
    text: 'Joy entered to find a small chair with a smaller laptop. Next to the computer was a small note that read: \'Write a specRunner.html for a search engine\' <br> Joy began to work and wept silently as the door behind her clicked shut.',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentySix: {
    context: '', // two doors
    text: 'You just had to push the button didn\'t you? <br> Joy saw the wall behind her reveal a secret door and a slide. Joy walked cautiously towards the door.',
    choices: [['(Obey) Open the secret door', 'moveTo(room.twentyFive)'],
              ['(DISOBEY) Ride the secret slide', 'moveTo(room.twentySeven)']],
  },

  twentySeven: {
    context: '', // two doors
    text: 'WEEEEEEE! Joy was thrilled by the slide. She picked up speed. How long was this slide? She grew worried. After what seemed like ages, Joy came to a fork in the slide and went right.',
    choices: [['(OBEY) Lean to the right', 'moveTo(room.twentyEight)'],
              ['(DISOBEY) Lean to the left', 'moveTo(room.twentyNine)']],
  },

  twentyEight: {
    context: '', // two doors
    text: 'CONGRATULATIONS, JOY! The name of your tormentor is Nick. With that jaw-dropping revelation, you are free to go. <br> [YOU ARE NOT FREE TO GO]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyNine: {
    context: '', // two doors
    text: 'Joy should have gone right. [YOU HIT A WALL WITH FORCE AND DIE]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirty: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyThree: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyFour: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyFive: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtySix: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtySeven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyEight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirtyNine: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  forty: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyThree: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyFour: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyFive: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortySix: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortySeven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyEight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fortyNine: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fifty: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyThree: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyFour: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyFive: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftySix: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftySeven: {
    context: '', // two doors
    text: 'The Piper screams and the rats attack.',
    choices: [['Throw more acid at the rats', 'moveTo(room.twelve)'],
              ['Run away', 'moveTo(room.thirteen)']],
  },

  fiftyEight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  fiftyNine: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixty: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyThree: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyFour: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyFive: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtySix: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtySeven: {
    context: '', // two doors
    text: 'Joy continued to lovingly stare at the broom on the floor.',
    choices: [['(OBEY) Turn to the broom closet entrance', 'moveTo(room.eight)'],
              ['(DISOBEY)Remain in the broom closet', 'moveTo(room.sixtySeven)']],
  },

  sixtyEight: {
    context: '', // two doors
    text: 'Joy, despairing a life of climbing stairs or being trapped in the closet, viciously beat herself with the broom. <br> [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
/* FUTURE EVENTS
  sixtyNine: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seventy: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seventyOne: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seventyTwo: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
*/

};

moveTo(room.one);
