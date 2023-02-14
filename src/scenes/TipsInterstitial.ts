import Phaser from 'phaser'
import SceneKeys from '~/consts/SceneKeys'
import { WhiteColor, OrangeColor } from '~/consts/Colors'

import { getNextTip } from '~/consts/VirusTips'

export default class TipsInterstitial extends Phaser.Scene {
	create(data: { target: string } = { target: SceneKeys.TitleScreen }) {
		const width = this.scale.width
		const height = this.scale.height

		const fontSize = Math.min(width * 0.07, 125)
		const tip = getNextTip()
		const color = `#${WhiteColor.toString(16)}`

		this.add.text(20, 20, 'TIP', {
			fontFamily: 'Arial',
			fontSize: 160,
			fontWeight: 'bold',
			color: 'black',
		})

		this.add.text(width * 0.5, height * 0.5, tip, {
			fontFamily: 'Arial',
			fontSize,
			color: 'black',
			align: 'center',
			wordWrap: {
				width: width * 0.8
			}
		})
			.setOrigin(0.5)

		const evt = this.time.delayedCall(5000, () => {
			this.scene.start(data.target)
		})

		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			evt.remove(false)
			this.time.delayedCall(100, () => {
				this.scene.start(data.target)
			})
		})
	}
}
