let room = {};
room = {
  one: {
    image: '', // two doors
    text: 'When Joy came to a set of two open doors, she walked through the door to her left.',
    buttons: [['(OBEY)Enter the door on your left', 'moveTo(room.two)'],
              ['(DISOBEY)Enter the door on your right', 'moveTo(room.three)']],
  },
  two: {
    image: '', // two doors
    text: 'Instead of class I\'m taking you to see a pretty rainbow. WHOA! Watch the maelstrom.',
    buttons: [['(OBEY)Skip towards the sparkling rainbow', 'moveTo(room.four)'],
              ['(DISOBEY)Wander towards the terrifying maelstrom', 'moveTo(room.five)']],
  },
  three: {
    image: '', // two doors
    text: 'I see you are confused. I said left. You went right. This must be some mistake.',
    buttons: [['(OBEY)Get back to the main story[Take the open door]', 'moveTo(room.two)'],
              ['(DISOBEY)Continue frivolous exploration', 'moveTo(room.six)']],
  },
  four: {
    image: '', // two doors
    text: 'What a wonderful rainbow!',
    buttons: ['THE END IS NEVER THE END', 'moveTo(room.one)'],
  },
  five: {
    image: '', // two doors
    text: 'Pro tip: Avoid the maelstrom. Why didn\'t you listen? [YOU ARE VERY DEAD].',
    buttons: ['THE END IS NEVER THE END', 'moveTo(room.one)'],
  },

  six: {
    image: '', // two doors
    text: 'Oh-ho how droll. Let\'s see how much you like ignoring me when THIS happens! [YOU ARE DEAD]',
    buttons: ['THE END IS NEVER THE END', 'moveTo(room.one)'],
  },
};

moveTo(room.one);
