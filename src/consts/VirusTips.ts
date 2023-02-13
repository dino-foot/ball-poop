import Phaser from 'phaser'

const tips = [
	'Drag the cannon to shoot the ball, match 3 balls with same color to gain score',
]

let tipIdx = Phaser.Math.Between(0, tips.length - 1)
const getNextTip = () => {
	const tip = tips[tipIdx]

	++tipIdx

	if (tipIdx >= tips.length) {
		tipIdx = 0
	}

	return tip
}

export default tips

export {
	getNextTip
}
