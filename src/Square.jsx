import React from 'react';

const Square = (props) => {
    console.log(props.squares, props.player)
    return (
        <div className='square' onClick={handleClick}>{props.squareValue === 'O' ? < img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt='' /> : props.squareValue}
            </div>
    );
};

const handleClick = (props) => {
    if(props.squareValue === false) {
        if(props.player === true) {
            props.squares.splice(props.index, 1, 'X');
            props.setSquares(props.squares);
            props.setPlayer(null);
        } else {
            props.squares.splice(props.index, 1, 'O');
            props.setSquares(props.squares);
            props.setPlayer(null);
        }

    }
};

export default Square;