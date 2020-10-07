import React, { useEffect, useState } from 'react';
import Figure from './components/Figure';
import Header from './components/Header';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import { showNotification as show } from './helpers/helper';
import './styles/main.scss';

const words = [
	'html',
	'css',
	'javascript',
	'react',
	'application',
	'hustle',
	'business',
	'learning',
	'studying',
	'challenge',
	'difficult',
	'persevere',
	'fun',
	'passion'
];

let randomWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
	const [gameOn, setGameOn] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [showNotification, setShowNotification] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e) => {
			const { key, keyCode } = e;
			if (gameOn && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();

				if (randomWord.includes(letter)) {
					if (!correctLetters.includes(letter)) {
						setCorrectLetters((correctLetters) => [...correctLetters, letter]);
					} else {
						show(setShowNotification);
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
					} else {
						show(setShowNotification);
					}
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [wrongLetters, correctLetters, gameOn]);

	const playAgain = () => {
		setGameOn(true);

		// Empty Arrays
		setCorrectLetters([]);
		setWrongLetters([]);

		const random = Math.floor(Math.random() * words.length);
		randomWord = words[random];
	};

	return (
		<>
			<Header />
			<div className="game-container">
				<Figure wrongLetters={wrongLetters} />
				<WrongLetters wrongLetters={wrongLetters} />
				<Word randomWord={randomWord} correctLetters={correctLetters} />
			</div>
			<Popup
				correctLetters={correctLetters}
				wrongLetters={wrongLetters}
				randomWord={randomWord}
				setGameOn={setGameOn}
				playAgain={playAgain}
			/>
			<Notification showNotification={showNotification} />
		</>
	);
};

export default App;
