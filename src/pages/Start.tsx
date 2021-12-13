/*
 * 
 * 
 * 
 * @date: 12/11/2021 - 10pm est
 * @author: Brandon Nadeau
*/

import React, { useState, useMemo, FormEvent } from 'react';


// Interface for props that will be passed to Start as an argunment.
interface Props {
    handleStart(players: string[]): void; 
}



// Create the start function that accepts a Props attribute.
const Start = (props: Props) => {


    const styles = {

        main: {
            margin: 'auto auto',
            display: 'flex',
            justifyContent: 'center',
            background: 'blue',
        },

        header: {
            background: 'red',
            // display:'block',
            //  width: '100%'
        }
    };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // setup the props and states.
    const { handleStart } = props;

    // Setup player states.
    const [players, setPlayers] = useState(["", ""]);

    // Setup the game state handlers.

    /// The state that handles the player inputs.
    /// handleInput(event, index)
    const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
        const newPlayers = [...players]; //
        newPlayers.splice(index, 1, event.currentTarget.value); // Create list of new players from the input fields.
        setPlayers(newPlayers); // Set the state for the players
    };

    // Make sure both players are ready.
    // ???
    const canStart = useMemo(
        () => players.every((player) => player && player.length > 0),
        [players]
    );

    /// The game can start if both players ready up.
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // ?
        if (!canStart) return; // If conditions to start are not met, return
        handleStart(players); // Handle how the game will start given the players (map, mode, etc).
    };


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div style={styles.main}>
            <div style={styles.header}><h1>Tic Tac Toe</h1></div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='player1'>Player 1</label>
                    <input
                        type='text'
                        value={players[0]}
                        onInput={(e) => handleInput(e, 0)}
                    />
                </div>
                
                <div>
                    <label htmlFor='player2'>Player 2</label>
                    <input 
                        type='text'
                        value={players[1]}
                        onInput={(e) => handleInput(e, 1)}
                    />
                </div>
                
                <div>
                    <button type='submit' disabled={!canStart}>
                        Submit
                    </button>
                </div>
            </form> 
        </div>
    );


}



export default Start;


