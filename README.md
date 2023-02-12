# KIDS MEMORY GAMES PROJECT

![screenshot](docs/readme/responsive.png) ![screenshot](docs/readme/games.png)

This is my first javascript project. I decieded to make the game from scratch rather than following a tutorial or a you-tube.com video so that I could gain as much knowledge about the javascript language and learn as I coded.  
I have built a card memory game that consits of three game styles, farm, space and cars. I chose these three themes as my little boy has a interest in all of them and I thought it would be fun to give him a choice when he played it. It would also be a good way to help with his memory skills and making 3 games would test my knowledge of using the DOM and what I have learnt from the Javascript modules in the code Institute course I am currently studying.

## UX

### Colour Scheme

I used colours that compliment the backgrounds and are fun for kids at the same time.

- `#ffffff` used for primary text. This gives a strong contract between the text and all 4 backrounds used on the app.
- `#793568` used for button colour as this felt neutral and a good colour choice for all game styles. Matching the landing page backround image this makes the colours feel connected. I used code from [dev.to](https://dev.to/webdeasy/top-20-css-buttons-animations-f41) by [Kocsten](https://codepen.io/kocsten) for the button animation. 

![screenshot](docs/features/btnAnimation.png)
![screenshot](docs/features/btnPurple.png)

- `#6c757d` used for the instructions modal.
- `#05630a` used for winning modal to stand out from the softer colours used on the app to grab attention.
- `#000000` used for winning modal for a contrast colour for the winner modal animation.


- text-shadow: 2px 2px 8px #000000; box-shadow: 2px 2px 8px #000000; was used to make the text, buttons and cards pop and lift off the backgrounds.

I used [coolors.co](https://coolors.co/793568-6c757d-ffffff-000000-09e614) to generate my colour palette.

![screenshot](docs/readme/colours.png)

### Typography

I used Short Stack for the app font as it is a low contrast semi-geometric typeface inspired by childish written letters. It is sturdy, and clear but also whimsical and fun.

- [Short Stack](https://fonts.google.com/specimen/Short+Stack) was used for all of the text throughout the app.

- [Font Awesome](https://fontawesome.com) icons were used on the site buttons and the github icon in the footer.

## User Stories

### New Site Users

- As a new site user, I would like to read the game instructions, so that I can understand the game and what features it has.
- As a new site user, I would like to be able to choose a game style, so that I can play a game that suits my mood.
- As a new site user, I would like to be able to start a game from the game screen, so that I can begin a game of my chosen style.
- As a new site user, I would like to see a timer start when I start the game, so that I can see how fast I can complete it.
- As a new site user, I would like to see how many turns I have made as I play the game, so that I can keep track of this.
- As a new site user, I would like to be able to reset the game, timer and turns, so that I can start a new game on the same game style.
- As a new site user, I would like to be able to choose a new game style after or during playing a game, so that I can try another style.
- As a new site user, I would like to be shown my time and turns taken when I match all the cards in a game, so that I can see how well I have done.
- As a new site user, I would like to be given feedback based on how well I have done in the game, so that I can see how well I am doing.
- As a new site user, I would like to see a difference in the game styles that relate to their style, so that I feel I am playing a different game.
- As a new site user, I would like to hear a sound played when I match a card, so that I can audibly recognise this.
- As a new site user, I would like to hear sounds on button clicks, so that I can audibly recognise that they have been clicked.
- As a new site user, I would like to hear a sound related to the game when i choose a style, so that I can audibly recognise what game I am playing.
- As a new site user, I would like to hear a sound when I press the start button on a game, so that I know the game has started.
- As a new site user, I would like to hear a sound when I win the game, so that I can celebrate my win.
- As a new site user, I would like to be able to play the game on a variety of mobile devices, so that I can play on the go.
- As a new site user, I would like to play the game on different browsers, so that I can not worry about what browser I am using.

### Returning Site Users

- As a returning site user, I would like the game to play exactly the same as the last time I played it, so that I can improve my technique .
- As a returning site user, I would like to be able to play the game on a variety of different devices, so that I can play when I want.

### Site Admin

- As a site administrator, I should be able to flip all the cards to assist with matching cards & winning the game, so that I can test the app and develop new features quickly.

## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

<details><summary>Game Start</summary>
<img src="docs/wireframes/startPage.png">
</details>
<details><summary>Instructions</summary>
<img src="docs/wireframes/instructions.png">
</details>
<details><summary>Game Style</summary>
<img src="docs/wireframes/chooseGame.png">
</details>
<details><summary>Game Page</summary>
<img src="docs/wireframes/gamePage.png">
</details>
<details><summary>Winner Modal</summary>
<img src="docs/wireframes/winnerModal.png">
</details>

## Features

In this section, you should go over the different parts of your project,
and describe each in a sentence or so.

You will need to explain what value each of the features provides for the user,
focusing on who this website is for, what it is that they want to achieve,
and how your project is the best way to help them achieve these things.

For some/all of your features, you may choose to reference the specific project files that implement them.

IMPORTANT: Remember to always include a screenshot of each individual feature!

### Existing Features

- **Start Button**

    - Start button to get to the choose game section of the game, plays a 'pop' sound. Adds the choose game section to the DOM and hides the start button section. 

![screenshot](docs/features/startBtn.png)

- **Instructions**

    - Instructions button with single 'pop' sound played on click that opens the bootstrap instructions modal. Modal close button plays another single 'pop' sound on click and closes the modal.

![screenshot](docs/features/instructions.png)
![screenshot](docs/features/instructionsBtn.png)

- **3 Game Style Buttons**

    - 3 Buttons that allow the user to select a game style which play a 'pop' sound on click and takes the user to that style of game.
Clicking the farm, space or car game button manipulates the DOM and hides the game header (main title), instructions section and choose game section. It then shows the game style title (**The appropriate game style name for the game you are playing is displayed**) adds the game grid (**Including the specific game cards for the chosen game style**). The game start button, timer, turns counter, reset button and new game style button are all now visible and the backround is changed to the appropriate background image.  

![screenshot](docs/features/3Buttons.png)

![screenshot](docs/features/farmGame.png)
![screenshot](docs/features/spaceGame.png)
![screenshot](docs/features/carGame.png)

- **Main Game Start Button**

    - Start button that begins the game and plays a 'start the game already' vocal sound on click. This shuffles the cards, starts the timer, allows used turns to be appended to the turns counter and allows the cards to now flip when clicked. (**Cards cannot be flipped on click until this button is pressed**)

![screenshot](docs/features/mainStartBtn.png)

- **Reset Game Button**

    - Reset Game button plays a 'horn' sound on click. This flips all the cards back to their original position, resets the timer to 00:00:00, resets the turns counter to 0, shuffles the cards and **does not** allow any more cards to be flipped on click until the start button is clicked.

![screenshot](docs/features/resetBtn.png)

- **New Game Style Button**

    - New game style button plays a 'pop' sound on click and returns the user to . This shuffles the cards, resets the timer to 00:00:00, resets the turns counter to 0 and flips all the cards back to their original position. The background is reverted back to the main game background, the DOM is manipulated again to hide all of the game contents and now shows the main title header, instruction button and the three game buttons once more.
    (**Importantly this also clears the previous game style otherwise the game grids would not disapear and the game grids would stack ontop of each other as you switched between game styles**)

![screenshot](docs/features/newGameBtn.png)

- **Game Timer**

    - Game timer. Starts when the Start Game button is pressed. Shows the time taken in minutes, seconds and milliseconds. Resets to 0 when the reset game, new game style or close winning modal buttons are pressed.

![screenshot](docs/features/timer0.png)![screenshot](docs/features/timer1.png)

- **Turns Taken**

    - Turns Taken Counter. Increments by 1 everyime 2 cards are flipped irrelevent if the 2 cards match or not.

![screenshot](docs/features/turns0.png) ![screenshot](docs/features/turns5.png)

- **Match Found Sound**

    - 'Match Found' sound plays when a 2 cards are flipped and match.

![screenshot](docs/features/match.png)

- **Flip all Cards on Keypress**

    - Pressing 'shift' + 'r' keys on the keyboard flips all the cards to reveal their locations. Used as a developer tool or as a possible Easter Egg for the user in a future version.

![screenshot](docs/features/noFlip.png) ![screenshot](docs/features/flipped.png) 

- **Winning Modal**

    - When playing a game and 8 pairs of cards are matched the game ends and a winning modal opens with a black and green backround which toggles between the two colours. A 'winning tune' is playeded and text congratulates the user.
    The modal show the time taken from starting the game to winning, the number of turns taken and the star rating. 8 > 20 turns taken = ⭐️⭐️⭐️, 21-30 turns = ⭐️⭐️, 31-40 turns = ⭐️ and 40 > = no stars.

![screenshot](docs/features/winModal.png)

- **Modal Close Button**

    - Modal close button when clicked plays a 'pop' sound. This the resets the timer to 00:00:00, resets turns taken counter to 0, flips all the cards back to their original position. Also importantly it stops the user from flipping any cards until the start button is clicked again. 

![screenshot](docs/features/modalCloseBtn.png)

 - **Footer icon with link**

    - Footer icon with link to my github repos 

![screenshot](docs/features/footerIcon.png)

 - **Card flip animation on click**

    - Cards appear to flip when clicked with an animation and stay turned ober for 0.8 seconds if they dont match


### Future Features

These are ideas I have not had the time to implement on this project but if I come back to this project would like implement.

- Cool new feature #1
    - High Score Table that keeps your times, turns and star rating locally. 
- Cool new feature #2
    - Different sized game grids to increase/decrease game difficulty.
- Cool new feature #3
    - Random card generator to add images from all games to create a brand new one.
- Cool new feature #4
    - Animations on the card backgrounds whilst playing the game.  
- Cool new feature #5
    - A sound toggle to turn the sound on and off.  

## Tools & Technologies Used


- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) used for an enhanced responsive layout.
- [Bootstrap](https://getbootstrap.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [JQuery](https://jquery.com/) used for getting access to a feature-rich JavaScript library.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) used to help generate the Markdown files.


## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/MJstephenson/KidsMemoryGame), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://mjstephenson.github.io/KidsMemoryGame)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/MJstephenson/KidsMemoryGame) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/MJstephenson/KidsMemoryGame.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/MJstephenson/KidsMemoryGame)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MJstephenson/KidsMemoryGame)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

These appear to be identical and work in the same manner.

## Credits

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp) | forEach() page | how to use Javascript Array forEach() |
| [W3Schools](https://www.w3schools.com/cssref/css_selectors.php) | CSS selector reference | use of * |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [Stackoverflow](https://stackoverflow.com/questions/9419263/how-to-play-audio) | how to play audio | How to use javascript code to use an Mp3 |
| [Bootstrap](https://getbootstrap.com/docs/5.0/components/modal/) | modals | how to use a vertically centered modal |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) | reset timer | how to clear timer |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) | examples on page | Child combinator > explained |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) | examples on page | Document.querySelector() explained |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) | examples on page | Logical Or operator explained |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) | examples on page | .this explained |
| [EDUCBA](https://www.educba.com/jquery-keycode/) | JQuery keycodes | keycode page | find the keycodes for keyboard keys |
| [Geeksforgeeks](https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/) | shuffle examples | ideas for card shuffle |
| [Jquery](https://api.jquery.com/hasclass/) | .has() page | describes the use of has class |
| [Jquery](https://api.jquery.com/not/#not-selector) | .not() class page | describes the use of has class |
| [Jquery](https://api.jquery.com/category/manipulation/) | page with links | Methods to manipulate the DOM |
| [SmashingMagazine](https://www.smashingmagazine.com/2009/08/taming-advanced-css-selectors/) | section 2 | how to use the Child selector > |
| [Dev](https://dev.to/shantanu_jana/create-a-simple-stopwatch-using-javascript-3eoo) | this page | how to build a stopwatch timer |
| [Tutorials Teacher](https://www.tutorialsteacher.com/javascript/javascript-function) | this page | Javascript functions explained |


### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |
| [Unsplash](https://unsplash.com/photos/7fjVzKzjni4) | main background image | image | used as the core game image |
| [Vecteezy](https://www.vecteezy.com/photo/10634846-racetrack-highway-speed) | car game main screen background | image | Car game background image |
| [Vecteezy](https://www.vecteezy.com/vector-art/1340619-farm-scene-in-nature-with-house) | farm game main screen background | image | Car game background image |
| [Vecteezy](https://unsplash.com/photos/qtRF_RxCAo0) | Space game main screen background | image | Space game background image |
| [Vecteezy](https://www.vecteezy.com/png/13182982-farm-watercolor-cartoon-cute) | farm cards unflipped | image | Farm sign |
| [Vecteezy](https://www.vecteezy.com/png/10864643-man-farmer-holding-basket-of-potatoes-agricultural-cartoon-character-illustrations) | farm cards | image | Farmer image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11216040-cartoon-cute-chicken) | farm cards | image | Chicken image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11212823-cartoon-cute-sheep) | farm cards | image | Sheep image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11213347-cartoon-cute-cow) | farm cards | image | Cow image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/10136388-pig-watercolor-cartoon-animal) | farm cards | image | Pig image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11904784-cartoon-cute-barn-in-farm) | farm cards | image | Barn image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11212822-cartoon-cute-goose) | farm cards | image | Goose image for farm cards |
| [Vecteezy](https://www.vecteezy.com/png/11212822-cartoon-cute-goose) | farm cards | image | Scarecrow image for farm cards |
| [pngegg](https://www.pngegg.com/en/png-ppeza) | car cards unflipped | image | 2 cars together |
| [Vecteezy](https://www.vecteezy.com/png/9398852-fuel-gauge-clipart-design-illustration) | car cards | image | Fuel guage image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/8822058-3d-rendering-illustration-of-a-lowpoly-car) | car cards | image | orange car image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/8822055-3d-rendering-illustration-of-a-lowpoly-car) | car cards | image | blue car image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/8822047-3d-rendering-illustration-of-a-lowpoly-car) | car cards | image | green car image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/8822052-3d-rendering-illustration-of-a-lowpoly-car) | car cards | image | pink car image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/13362604-car-steering-wheel) | car cards | image | steering wheel image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/9342686-car-shift-clipart-design-illustration) | car cards | image | gear knob image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/9342686-car-shift-clipart-design-illustration) | car cards | image | gear knob image for car cards |
| [Vecteezy](https://www.vecteezy.com/png/9311547-astronaut-space-drift-astronomy-3d-illustration) | space cards unflipped | image | spaceman in suit |
| [Vecteezy](https://www.vecteezy.com/png/10833673-3d-earth-planet-illustration) | space cards | image | earth image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/8480455-rocket-launching-business-start-up-concept-illustration-for-business-idea-concept-background) | space cards | image | purple rocket image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/10833673-3d-earth-planet-illustration) | space cards | image | earth image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/10833587-3d-uranus-planet-illustration) | space cards | image | blue planet image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/9342727-rocket-spaceship-clipart-design-illustration) | space cards | image | white rocket image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/16778857-planet-galaxy-space) | space cards | image | brown planet image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/10833674-3d-sun-planet-illustration) | space cards | image | sun image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/9391780-ufo-spaceship-concept-clipart-design-illustration) | space cards | image | pink ufo image for space cards |
| [Vecteezy](https://www.vecteezy.com/png/10154528-cartoon-cute-monster-icon-sign-design) | space cards | image | gray alien image for space cards |
| [Myinstants](https://www.myinstants.com/en/instant/pop/) | button click | sound | for start game landing page, instruction, game style buttons |
| [Myinstants](https://www.myinstants.com/en/instant/pop-sfx-75405/) | button click | sound | for close modal buttons |
| [Myinstants](https://www.myinstants.com/en/instant/rooster-alarm/) | button click | sound | for farm game button |
| [Myinstants](https://www.myinstants.com/en/instant/laser-shot-tie-80249/) | button click | sound | for space game button |
| [Myinstants](https://www.myinstants.com/en/instant/engine-revv-19869/) | button click | sound | for car game button |
| [Myinstants](https://www.myinstants.com/en/instant/start-the-game-already-aoc/) | button click | sound | for main game start button |
| [Myinstants](https://www.myinstants.com/en/instant/match-found-vava-48478/) | button click | sound | for match found button |
| [Myinstants](https://www.myinstants.com/en/instant/winners-92695/) | button click | sound | for match found button |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim](https://github.com/username) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my spouse/partner (Lucy), for believing in me, and allowing me to make this transition into software development.

