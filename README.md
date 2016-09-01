# Project_01 The Parable of Joy


Welcome to a Vanilla JS/HTML5/CSS3 clone of the Stanley Parable, courtesy of Valve Corporation. In this game you will:

* **Make choices**
* **Suffer the consequences of those choices** & **Make additional choices**
* **Ponder Your Existence**
*  **Experience a sense of nihilism**
* **Feel inspired to make your own silly adventure game**

---

### User Story

*  **The player starts in a room**
*  **The room contains context** either as a media file or animation
*  **The room contains instructions** in the form of text
*  **The room contains choices** represented by buttons
*  **The player makes a choice by pressing a button**
*  **The player is transported to a new room**
*  **The player wins by finding the meaning of life hidden within room.fortyTwo (teehee), or by finding all story endings.**

---

### How I started

* **First things first, create the object to hold all your events** I called the object a room, it should probably be called events. Don't judge me. From here on out all events will be referred to as ``rooms``
* **Second, make each event in your story an object within your ``master`` events object** This will make it easy to move from room to room and allow you to add on new events as you go
* **Hold on there, you need to map out your story**. How will choices affect other choices? Start with two choices per room and move on from there.

* **But what's in each room?** Whatever you want! I gave my rooms attributes of:
  -Context: so you know where you are.
  -Instructions: so you know what you're expected to do.
  -Choices: so you can decide what to do
* **The only ability my player has** is the ability to move between rooms
* **Now that we have a map and a way to move between rooms it's time to write a basic story involving only two-choice branches.** For example, I wrote a sample story about following the narrator to see a rainbow. I have the choice to follow him in the initial room. Then I have the choice to follow him or not, each producing a unique ending.
* **Changing the order in which you make choices** will change your experience of the game. Try obeying the narrator at every step. Then try disobeying. Maybe try mixing it up after that. Or you could just smash your head against the computer and evaluate the results of your choices that way.

---
