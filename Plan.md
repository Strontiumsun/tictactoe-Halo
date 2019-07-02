forget the react tutorial. I need to plan this game out how I think, not how React or anyone else thinks.

How this app works:
- When the page loads, there will be a blank, clickable grid with nine square spaces
- One user will go first and represent X
-- The second user will be O
- User 1 with X will choose a square to place X in. The square will change from blank to X
- User 2 with O will choose a different square to place O in. They cannot choose the same square that User 1 has already chosen.
- User 1 and User 2 will alternate choosing spots until either condition happens
--- There are three X's or three O's in a row
---- someone wins this game!
OR
--- all of the spaces are taken up
---- the game is a draw
- I would like there to be a way to restart the game, although it might have to involve refreshing the page

Components:
- Game: This component will be rendered on the App.js page. 
-- In different versions of this game, it was suggested that Game hold the states, or that Grid hold the states. If Game holds the states, it needs to pass them down as props to Grid, who passes them down to the squares. If Grid holds the states, it only needs to pass that once down to squares. That might make Game seem a bit redundant, but it works as a holding component.

- Grid: this component will hold all of the squares, and contain the logic that makes the squares operate
* Logic needed:
    - A function that makes 9 squares appear in the grid
    - A function that makes the squares clickable
    - A function that changes the squares from being blank to displaying X or O
    - A function that prevents the squares from being changed again
    - A function that determines if the game has been won
    - A function that tells the User if it is X or O's turn
    - A function that restarts the game (ie. it refreshes the page)

- Squares: this component will be clickable. At first, all the squares will be blank. Once clicked on, they will change to X or O depending on whose turn it is
-- Individual squares will receive new values through props.     