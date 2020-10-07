import React from 'react';

const Figure = ({ wrongLetters }) => {
	const errors = wrongLetters.length;

	return (
		<>
			<svg className="figure-container" height="400" width="400">
				{errors > 0 && (
					<circle
						cx="200"
						cy="80"
						r="20"
						strokeWidth="4"
						fill="white"
						className="figure-part"
					/>
				)}

				{errors > 1 && (
					<line x1="200" y1="100" x2="200" y2="150" className="figure-part" />
				)}
				{errors > 2 && (
					<line x1="200" y1="120" x2="170" y2="140" className="figure-part" />
				)}
				{errors > 3 && (
					<line x1="200" y1="120" x2="230" y2="140" className="figure-part" />
				)}
				{errors > 4 && (
					<line x1="200" y1="150" x2="180" y2="190" className="figure-part" />
				)}
				{errors > 5 && (
					<line x1="200" y1="150" x2="220" y2="190" className="figure-part" />
				)}
				{/* rods */}
				{<line x1="10" y1="250" x2="150" y2="250" />}
				{<line x1="150" y1="250" x2="200" y2="250" />}
				{<line x1="100" y1="250" x2="100" y2="20" />}
				{<line x1="100" y1="20" x2="200" y2="20" />}
				{<line x1="200" y1="20" x2="200" y2="60" />}
			</svg>
		</>
	);
};

export default Figure;
