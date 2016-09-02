let room = {};
room = {
  one: {
    context: "https://i.ytimg.com/vi/Sytp-YZDpvI/maxresdefault.jpg", // two doors
    text: 'When Joy came to a set of two open doors, she walked through the door on her left.',
    choices: [['(OBEY)Enter the door on your left', 'moveTo(room.two)'],
              ['(DISOBEY)Enter the door on your right', 'moveTo(room.three)']],
  },
  two: {
    context: 'https://s-media-cache-ak0.pinimg.com/564x/27/4b/7c/274b7c4337a209cb8165eb420c88691a.jpg', // two doors
    text: 'Instead of class I\'m taking you to see a pretty rainbow. WHOA! Watch the tornado.',
    choices: [['(OBEY)Skip towards the sparkling rainbow', 'moveTo(room.four)'],
              ['(DISOBEY)Wander towards the terrifying tornado', 'moveTo(room.five)']],
  },
  three: {
    context: 'http://enseignement.reginaassumpta.qc.ca/paliotti_ricard/images/autumn/remembrance%20day/point-left-2.png', // two doors
    text: 'I see you are confused. I said left. You went right. This must be some mistake.',
    choices: [['(OBEY)Get back to the main story[Take the open door]', 'moveTo(room.two)'],
              ['(DISOBEY)Continue frivolous exploration', 'moveTo(room.six)']],
  },
  four: {
    context: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Double-alaskan-rainbow.jpg', // two doors
    text: 'What a wonderful rainbow!',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
  five: {
    context: 'http://www.thetimenow.com/blog/wp-content/uploads/2015/04/5-5-Tornadoes-forming-620x350.jpg', // two doors
    text: 'Pro tip: Don\'t walk into... the tornado.  <br> [YOU ARE VERY DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  six: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  seven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  eight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  nine: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  ten: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  eleven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twelve: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirteen: {
    context: '', // two doors
    text: '',
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
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentySix: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentySeven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyEight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyNine: {
    context: '', // two doors
    text: '',
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
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
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
/* FUTURE EVENTS
  sixtySeven: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  sixtyEight: {
    context: '', // two doors
    text: '',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

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

window.onload
