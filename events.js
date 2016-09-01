let room = {}
room = {
  one: {
    image: '', //two doors
    text: '',
    buttons: [['Enter the door on your left', 'moveTo(room.two)'],
              ['Enter the door on your right', 'moveTo(room.three)']]
  },
  two: {
    image: '', //two doors
    text: '',
    buttons: [['Enter the door on your left', 'moveTo(room.two)'],
              ['Enter the door on your left', 'moveTo(room.two)']]
  },
  three: {
    image: '', //two doors
    text: '',
    buttons: [['Enter the door on your left', 'moveTo(room.two)'],
              ['Enter the door on your left', 'moveTo(room.two)']]
  },
    four: {
      image: '', //two doors
      text: '',
      buttons: [['Enter the door on your left', 'moveTo(room.two)'],
                ['Enter the door on your left', 'moveTo(room.two)']]
    },
    five: {
      image: '', //two doors
      text: '',
      buttons: [['Enter the door on your left', 'moveTo(room.two)'],
                ['Enter the door on your left', 'moveTo(room.two)']]
    },

};

moveTo(room.one)
