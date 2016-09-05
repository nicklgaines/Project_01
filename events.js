let room = {};
room = {

  one: {
    context: 'http://www.maycontainspoilers.co.uk/wp-content/uploads/sites/5/2011/08/Two-Doors.jpg', // two doors
    text: 'When Joy came to a set of two open doors, she walked through the door on her left.',
    choices: [['(OBEY)Enter the door on your left', 'moveTo(room.two)'],
              ['(DISOBEY)Enter the door on your right', 'moveTo(room.three)']],
    secret: 1,
  },
  two: {
    context: 'http://previews.123rf.com/images/ratoca/ratoca1312/ratoca131200054/24355982-Up-and-down-stairs-Stock-Vector.jpg', // two doors
    text: 'Joy arrived in her usual classroom to find no one around. <br> How very strange, maybe they went up that very ordinary looking staircase? Do ignore the Piper',
    choices: [['(OBEY)Take the very ordinary looking stairs[Walk up the stairs]', 'moveTo(room.four)'],
              ['(DISOBEY)Follow the dancing rats[Walk down the stairs]', 'moveTo(room.five)']],
  },
  three: {
    context: 'http://3.bp.blogspot.com/-vgmosQQH-F0/UyCtNhfxJcI/AAAAAAAAHnk/rGEuyid0STg/s1600/pointing-finger.gif', // two doors
    text: 'I see you are confused. I said left. You went right. This must be some mistake.',
    choices: [['(OBEY)Get back to the main story[Take the open door]', 'moveTo(room.two)'],
              ['(DISOBEY)Continue frivolous exploration', 'moveTo(room.six)']],
  },
  four: {
    context: 'http://previews.123rf.com/images/mooltfilm/mooltfilm1111/mooltfilm111100012/11097336-Abstract-endless-spiral-staircase-with-soft-shadows-View-from-above-3d-illustration-Stock-Illustration.jpg', // two doors
    text: 'The stairs were ordinary, but Joy saw that they spiraled into the sky for hundreds of stories. <br>' +
          'Joy paused for a moment, but was having a lovely time mindlessly climbing the stairs and soon resumed her search for her class.',
    choices: [['(OBEY)Continue climbing', 'moveTo(room.seven)'],
              ['(DISOBEY)Step into the open broom closet', 'moveTo(room.eight)']],
  },
  five: {
    context: 'http://blog.thenewstribune.com/larue/files/2013/04/dancing-rats.jpg', // two doors
    text: 'Joy had apparently never heard of the Black Death and began dancing with the basement rats',
    choices: [['Dance with a heel lead', 'moveTo(room.nine)'],
              ['Dance with a toe lead', 'moveTo(room.ten)']],
  },

  six: {
    context: '', // two doors
    text: 'Well I didn\'t plan on you being such a jerk so I haven\'t written anything for this part yet.',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.fortyTwo)']],
  },

  seven: {
    context: 'http://images2.wikia.nocookie.net/__cb20100813033137/nerf/images/c/c5/Red_button.jpg', // two doors
    text: 'After climbing for several hours, Joy found an ornate wooden door almost ten feet tall.<br> Joy rang the door bell, but took care to avoid pushing the giant red button that said \'DO NOT PRESS\' ',
    choices: [['(OBEY) Ring the doorbell', 'moveTo(room.sixteen)'],
              ['(DISOBEY)You know what you want to do [Push the red button]', 'moveTo(room.twentySix)']],
  },

  eight: {
    context: 'http://mobileimages.lowes.com/product/converted/071798/071798509006.jpg', // two doors
    text: 'Um...ok. Joy walked into the broom closet and admired the broom lying on the floor.',
    choices: [['(OBEY) Return to the climb', 'moveTo(room.seven)'],
              ['(DISOBEY) Remain in the broom closet', 'moveTo(room.sixtySeven)'],
              ['(PANIC) Contemplate suicide', 'moveTo(room.sixtyEight)']],
  },

  nine: {
    context: 'http://www.starwoodhotels.com/pub/media/373/lux373de.144863_ub.jpg', // two doors
    text: 'The Piper admires your grace. He invites you to dine with his rats.',
    choices: [['(OBEY) Join the Piper for dinner', 'moveTo(room.eleven)'],
              ['(DISOBEY) Light the Piper on fire', 'moveTo(room.fiftySeven)']],
  },

  ten: {
    context: 'http://4.bp.blogspot.com/-MAqmQeLvkec/T5BoMJ0vYAI/AAAAAAAABXE/ncDk2mv_TWk/s1600/The_Pied_Piper2+Elisabeth_Alba__.jpg', // two doors
    text: 'The Piper does not enjoy your dancing. You are fed to the rats. <br> [YOU ARE DEAD]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  eleven: {
    context: 'http://www.starwoodhotels.com/pub/media/373/lux373de.144863_ub.jpg', // two doors
    text: 'You enjoy a lovely evening with the Pied Piper of Pied Pipers',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twelve: {
    context: 'http://i3.kym-cdn.com/photos/images/facebook/001/007/322/1d2.jpeg', // two doors
    text: 'The entire room is now on fire. You regret the senselessness of it all. <br> [YOU BURN AND DIE]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  thirteen: {
    context: 'http://images1.wikia.nocookie.net/__cb20120715031133/starwars/images/6/6c/Rancor.jpg', // two doors
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
    text: 'A gentleman answers the door. This part of the story has yet to be written',
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
    context: 'http://themarron.com/wp-content/uploads/2015/10/IMG_0438-copy.jpg', // two doors
    text: 'Joy entered to find a small chair with a smaller laptop. Next to the computer was a small note that read: \'Write a specRunner.html for a search engine\' <br> Joy began to work and wept silently as the door behind her clicked shut.',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentySix: {
    context: 'https://www.themurphydoor.com/wp-content/uploads/2015/07/17/murphy-door-presents-top-5-secret-doors-in-history/anne-frank.jpg', // two doors
    text: 'You just had to push the button didn\'t you? <br> Joy saw the wall behind her reveal a secret door and a slide. Joy walked cautiously towards the door.',
    choices: [['(Obey) Open the secret door', 'moveTo(room.twentyFive)'],
              ['(DISOBEY) Ride the secret slide', 'moveTo(room.twentySeven)']],
  },

  twentySeven: {
    context: 'http://massassi.ourhobby.com/massassi/pictures/episode_5/img/cloud_city_corridor15.jpg', // two doors
    text: 'WEEEEEEE! Joy was thrilled by the slide. She picked up speed. How long was this slide? She grew worried. After what seemed like ages, Joy came to a fork in the slide and went right.',
    choices: [['(OBEY) Lean to the right', 'moveTo(room.twentyEight)'],
              ['(DISOBEY) Lean to the left', 'moveTo(room.twentyNine)']],
  },

  twentyEight: {
    context: 'http://microsoftnewyork.com/wp-content/uploads/sites/21/2015/09/nick-twitter.jpg', // two doors
    text: 'CONGRATULATIONS, JOY! The name of your tormentor is Nick. With that jaw-dropping revelation, you are free to go. <br> [YOU ARE NOT FREE TO GO]',
    choices: [['THE END IS NEVER THE END', 'moveTo(room.one)'],
              ['IS NEVER THE END IS NEVER', 'moveTo(room.one)']],
  },

  twentyNine: {
    context: 'http://images.wisegeek.com/red-brick-wall.jpg', // two doors
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
    choices: [['Set the rats on fire', 'moveTo(room.twelve)'],
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
    context: 'http://mobileimages.lowes.com/product/converted/071798/071798509006.jpg', // two doors
    text: 'Joy continued to lovingly stare at the broom on the floor.',
    choices: [['(OBEY) Turn to the broom closet entrance', 'moveTo(room.eight)'],
              ['(DISOBEY)Remain in the broom closet', 'moveTo(room.sixtySeven)']],
  },

  sixtyEight: {
    context: 'http://il3.picdn.net/shutterstock/videos/4882880/thumb/1.jpg', // two doors
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

//Lines below are intended to add event listener to the big red button image in room.seven
 /*room.seven.context.addEventListener('click', (e) => {
  moveTo(room.twentySix)
//Create some kind of "image checker" fucntion that fires every time you move to a new room.
//give all images an id.
//image checker checks the id of each image in 'context' on every moveTo and if it returns true it applies the event listener to that image.
});*/
