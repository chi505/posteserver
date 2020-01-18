import express from "express";
import { Fighter } from "./Fighter";
import { showState } from "./showState";

let Alice = new Fighter({ name: "Alice", the_nth: 1 });
let Bob = new Fighter ({ name: "Bob", the_nth: 1 });

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    let [response, newFighter1, newFighter2 ] = showState(Alice, Bob)
    res.send( response);
    Alice = newFighter1;
    Bob = newFighter2;
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
