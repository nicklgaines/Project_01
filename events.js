let room = {};
room = {
  one: {
    context: "https://i.ytimg.com/vi/Sytp-YZDpvI/maxresdefault.jpg", // two doors
    text: 'When Joy came to a set of two open doors, she walked through the door to her left.',
    choices: [['(OBEY)Enter the door on your left', 'moveTo(room.two)'],
              ['(DISOBEY)Enter the door on your right', 'moveTo(room.three)']],
  },
  two: {
    context: '', // two doors
    text: 'Instead of class I\'m taking you to see a pretty rainbow. WHOA! Watch the maelstrom.',
    choices: [['(OBEY)Skip towards the sparkling rainbow', 'moveTo(room.four)'],
              ['(DISOBEY)Wander towards the terrifying maelstrom', 'moveTo(room.five)']],
  },
  three: {
    context: '', // two doors
    text: 'I see you are confused. I said left. You went right. This must be some mistake.',
    choices: [['(OBEY)Get back to the main story[Take the open door]', 'moveTo(room.two)'],
              ['(DISOBEY)Continue frivolous exploration', 'moveTo(room.six)']],
  },
  four: {
    context: '', // two doors
    text: 'What a wonderful rainbow!',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
  five: {
    context: '', // two doors
    text: 'Pro tip: Avoid the maelstrom. Why didn\'t you listen? [YOU ARE VERY DEAD].',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  six: {
    context: '', // two doors
    text: 'Oh-ho how droll. Let\'s see how much you like ignoring me when THIS happens! [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
};

moveTo(room.one);
