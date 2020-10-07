import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helper';

const Popup = ({
	correctLetters,
	wrongLetters,
	randomWord,
	setGameOn,
	playAgain
}) => {
	let finalMessage = '';
	let finalMessageRevealWord = '';
	let playable = true;

	if (checkWin(correctLetters, wrongLetters, randomWord) === 'win') {
		finalMessage = 'Congratulations! You won! 😃';
		playable = false;
	} else if (checkWin(correctLetters, wrongLetters, randomWord) === 'lose') {
		finalMessage = 'Unfortunately you lost. 😕';
		finalMessageRevealWord = `...the word was: ${randomWord}`;
		playable = false;
	}

	useEffect(() => {
		setGameOn(playable);
	});

	return (
		<div
			className="popup-container"
			style={finalMessage !== '' ? { display: 'flex' } : {}}>
			<div className="popup">
				<h2>{finalMessage}</h2>
				<h3>{finalMessageRevealWord}</h3>
				<button onClick={playAgain}>Play Again</button>
			</div>
		</div>
	);
};

export default Popup;
