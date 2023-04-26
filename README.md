# Nim Game

Nim is a game for 2 players. Given a heap of 13 matches, on every move, a player must take 1, 2 or 3 matches from the heap, until no matches are left. The player who draws the last match loses. There are many variations of the Nim game, this one is called misère game (on one row or heap).

For the moves done by the computer the number of matches taken by the computer can be chosen randomly. Of course, it must not exceed the number of available matches, e.g. if there are only two matches left the computer can only take one or two matches.

---

## Running the application

To be able to run the application you should have [Node.js](https://nodejs.org/en) installed.

Open a terminal window on the project directory and:

1.  Install the node modules (only needed the first time or when a package is added or changed)

    ```bash
    npm install
    ```

2.  Run the app

    ```bash
    npm start
    ```

3.  Open your preferred browser on the default [URL](http://localhost:4200/)

## Running unit tests

Open a terminal window on the project directory and run:

```bash
npm test
```
