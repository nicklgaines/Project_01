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
    context: 'http://www.gifanimations.com/samples/NzQzMWZjNWY0OGIzN2E=/NTJmYzVmNDhiMzdh/hand-rising-from-grave-with-lightning.jpg', // two doors
    text: 'Oh-ho how droll. Let\'s see how much you like ignoring me when THIS happens! <br> [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },
};

moveTo(room.one);
