# Testing

Return back to the [README.md](README.md) file.

In this section, you need to convince the assessors that you have conducted enough testing to legitimately believe that the site works well.
Essentially, in this part, you should go over all of your project's features, and ensure that they all work as intended,
with the project providing an easy and straightforward way for the users to achieve their goals.

## Code Validation

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

**IMPORTANT**: You must provide a screenshot for each file you validate.

**PRO TIP**: Always validate the live site pages, not your local code. There could be subtle/hidden differences.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fmjstephenson.github.io%2FKidsMemoryGame%2F

![screenshot](docs/validation/htmlTest.png)


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

- https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FMJstephenson.github.io%2FKidsMemoryGame

![screenshot](docs/validation/cssTest.png)

The validator shows a warning for a Unrecognized at-rule @-webkit-keyframes. Accorning to
https://stackoverflow.com/questions/22018509/at-rule-webkit-keyframes-is-not-implemented but are not within the W3C specification and they are browser specific, so you will always have something like this when running W3C validation. The same goes for any browser specific css hacks.

![screenshot](docs/validation/warning.png)

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all  my JS file.

![screenshot](docs/validation/jshintTest.png)


## Browser Compatibility

The game has been tested on these three browsers that I have available to me on my linux machine. The game works exactly the same accross all 3 browsers.
I tested for game wins, sounds, all features, button clicks etc. There appears to be no compatability issues.

- [Chrome](https://www.google.com/chrome)
- [Firefox](https://www.mozilla.org/firefox)
- [Opera](https://www.opera.com/download)

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](docs/browser-tests/Chrome/chromeLanding.png) | Works as expected |
| Firefox | ![screenshot](docs/browser-tests/Firefox/firefoxlanding.png) | Works as expected |
| Opera | ![screenshot](docs/browser-tests/Opera/operaLandingPage.png) | Works as expected |


## Responsiveness

Use this space to discuss testing the live/deployed site on various device sizes.

The minimum requirement is for the following 3 tests:
- Mobile
- Tablet
- Desktop

**IMPORTANT**: You must provide screenshots of the tested responsiveness, to "prove" that you've actually tested them.


If you have tested the project on your actual mobile phone or tablet, consider also including screenshots of these as well.
It showcases a higher level of manual tests, and can be seen as a positive inclusion!

Sample responsiveness testing documentation:

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsive-desktop.png) | Works as expected |
| XL Monitor | ![screenshot](documentation/responsive-xl.png) | Scaling starts to have minor issues |
| 4K Monitor | ![screenshot](documentation/responsive-4k.png) | Noticeable scaling issues |
| Google Pixel 7 Pro | ![screenshot](documentation/responsive-pixel.png) | Works as expected |
| iPhone 14 | ![screenshot](documentation/responsive-iphone.png) | Works as expected |
| x | x | repeat for any other tested sizes |

## Lighthouse Audit

![screenshot](docs/validation/lighthouse.png)


**IMPORTANT**: You must provide screenshots of the results, to "prove" that you've actually tested them.

Sample Lighthouse testing documentation:

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | Some minor warnings |
| Home | Desktop | ![screenshot](documentation/lighthouse-home-desktop.png) | Few warnings |
| About | Mobile | ![screenshot](documentation/lighthouse-about-mobile.png) | Some minor warnings |
| About | Desktop | ![screenshot](documentation/lighthouse-about-desktop.png) | Few warnings |
| Gallery | Mobile | ![screenshot](documentation/lighthouse-gallery-mobile.png) | Slow response time due to large images |
| Gallery | Desktop | ![screenshot](documentation/lighthouse-gallery-desktop.png) | Slow response time due to large images |
| x | x | x | repeat for any other tested pages/sizes |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home Page | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| Gallery Page | | | | |
| | Click on Gallery link in navbar | Redirection to Gallery page | Pass | |
| | Load gallery images | All images load as expected | Pass | |
| Contact Page | | | | |
| | Click on Contact link in navbar | Redirection to Contact page | Pass | |
| | Enter first/last name | Field will accept freeform text | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter message in textarea | Field will accept freeform text | Pass | |
| | Click the Submit button | Redirects user to form-dump | Pass | User must click 'Back' button to return |
| Sign Up | | | | |
| | Click on Sign Up button | Redirection to Sign Up page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password (twice) | Field will only accept password format | Pass | |
| | Click on Sign Up button | Asks user to confirm email page | Pass | Email sent to user |
| | Confirm email | Redirects user to blank Sign In page | Pass | |
| Log In | | | | |
| | Click on the Login link | Redirection to Login page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password | Field will only accept password format | Pass | |
| | Click Login button | Redirects user to home page | Pass | |
| Log Out | | | | |
| | Click Logout button | Redirects user to logout page | Pass | Confirms logout first |
| | Click Confirm Logout button | Redirects user to home page | Pass | |
| Profile | | | | |
| | Click on Profile button | User will be redirected to the Profile page | Pass | |
| | Click on the Edit button | User will be redirected to the edit profile page | Pass | |
| | Click on the My Orders link | User will be redirected to the My Orders page | Pass | |
| | Brute forcing the URL to get to another user's profile | User should be given an error | Pass | Redirects user back to own profile |

Repeat for all other tests, as applicable to your own site.
The aforementioned tests are just an example of a few different project scenarios.

## User Story Testing

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

### New Site Users
| User Story | Screenshot | Comment
| --- | --- |--- |
| As a new site user, I would like to read the game instructions, so that I can understand the game and what features it has. | ![screenshot](docs/features/instructions.png)![screenshot](docs/features/instructionsBtn.png)|
| As a new site user, I would like to be able to start a game from the game screen, so that I can begin a game of my chosen style. | ![screenshot](docs/features/startBtn.png) |
| As a new site user, I would like to be able to choose a game style, so that I can play a game that suits my mood. | ![screenshot](docs/features/3Buttons.png) |
| As a new site user, I would like to see a timer start when I start the game, so that I can see how fast I can complete it. | ![screenshot](docs/features/timer0.png) ![screenshot](docs/features/timer1.png)|
| As a new site user, I would like to see how many turns I have made as I play the game, so that I can keep track of this. | ![screenshot](docs/features/turns0.png)  ![screenshot](docs/features/turns5.png) |
| As a new site user, I would like to be able to reset the game, timer and turns, so that I can start a new game on the same game style. | ![screenshot](docs/features/resetBtn.png) |
| As a new site user, I would like to be able to choose a new game style after or during playing a game, so that I can try another style. | ![screenshot](docs/features/newGameBtn.png) |
| As a new site user, I would like to be shown my time and turns taken when I match all the cards in a game, so that I can see how well I have done. | ![screenshot](docs/features/winModal.png) |
| As a new site user, I would like to be given feedback based on how well I have done in the game, so that I can see how well I am doing. | ![screenshot](docs/features/starsTimeTurns.png) |
| As a new site user, I would like to see a difference in the game styles that relate to their style, so that I feel I am playing a different game. | ![screenshot](docs/features/carGame.png) ![screenshot](docs/features/farmGame.png)![screenshot](docs/features/spaceGame.png)|
| As a new site user, I would like to hear a sound played when I match a card, so that I can audibly recognise this. | ![screenshot](docs/features/match.png) | 'Its a Match' sound is played. |
| As a new site user, I would like to hear sounds on button clicks, so that I can audibly recognise that they have been clicked. | ![screenshot](docs/features/instructionsBtn.png)![screenshot](docs/features/3Buttons.png) ![screenshot](docs/features/mainStartBtn.png) ![screenshot](docs/features/newGameBtn.png) ![screenshot](docs/features/modalCloseBtn.png) ![screenshot](docs/features/resetBtn.png)![screenshot](docs/features/startBtn.png)| All buttons play a sound |
| As a new site user, I would like to hear a sound related to the game when i choose a style, so that I can audibly recognise what game I am playing. | ![screenshot](docs/features/3Buttons.png) | Buttons play a specific sound related to the game style |
| As a new site user, I would like to hear a sound when I press the start button on a game, so that I know the game has started. | ![screenshot](docs/features/mainStartBtn.png) | Plays a 'Start the game already' sound |
| As a new site user, I would like to hear a sound when I win the game, so that I can celebrate my win. | ![screenshot](docs/features/winModal.png) | Tune plays as game is won |
| As a new site user, I would like to be able to play the game on a variety of mobile devices, so that I can play on the go. | Works accross devices .See device responsiveness testing |
| As a new site user, I would like to play the game on different browsers, so that I can not worry about what browser I am using. | Tested on 3 browsers. See browser compatability|
| As a returning site user, I would like the game to play exactly the same as the last time I played it, so that I can improve my technique. | It works the same when a user returns |
| As a returning site user, I would like to be able to play the game on a variety of different devices, so that I can play when I want. | Tested on a variety of devices. See device testing |
| As a site administrator, I should be able to flip all the cards to assist with matching cards & winning the game, so that I can test the app and develop new features quickly. | ![screenshot](docs/features/flipped.png) | Flip all cards by pressing shift + r keys|

## Bugs

Timer
- Timer kept doubling in speed when the start game button was clicked to start a new game. The timer would also start from where it previously left off from the previous game even though when the reset button was clicked it set it to 00:00:00.

    ![screenshot](docs/bugs/timerBug.png)

    - To fix this, I created a gamestate in the code 0 or 1 which I could use set whether a game was running or not and used timer = null to reset the timer to zero so that the timer worked correctly.

Game Grids
- Game grids stacked ontop of each other when playing a game and then choosing another game style, then another game style.

    ![screenshot](docs/bugs/stackBug.png) ![screenshot](docs/bugs/stackBugFix.png)

    - To fix this, I wrote some code that removed the previous game grid from the DOM by removing its active class.

Sound
- Match sound kept doubling up when a match was found to create an echo of the sound as you progressed through the game.

    - To fix this, I wrote some code that would test to see if the sound was playing and would not play the matched sound if it was. This is slightly imperfect as sometimes if you get a match quickly one after the other it wont play the matched sound, but I thought that this was better than having the echo.

    ![screenshot](docs/bugs/matchSound.png)

False Win
- If you got a matching pair of cards and then clicked on them again and again (rather than searching for another pair) matched cards would continue to be addded to the matched cards array until there was 16 and the game ended unfortunately. I first attacked this by writing new code that targeted the card that was last clicked and stoppping it from being clickable once it was matched. I then realised I had to do it on both so added to the code and/or the cards have class matched so that a matching cards cannot be clicked again.

    ![screenshot](docs/bugs/badWin.png)

Bad Flip
- When 2 cards were matched, and you selected another 2 - all 4 cards were flipped back over.

    ![screenshot](docs/bugs/removeClass.png)

    - To fix this, I added a matched class to the cards if there was a match (the match is checked from the image-2 dataset) and then added them to the matched array and at the same time removed their active class so that they would not be flipped back over.

## Unfixed Bugs

- Playing the game on a friends iphone-x, all sounds play as they should except for the sound that is played when there is a game win and the win modal opens. This win sound plays on all other devices that I have tested so this would need further investigation as to why this sound only does not play on this event on this device.


