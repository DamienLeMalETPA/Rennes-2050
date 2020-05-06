class Rennes extends Phaser.Scene {
	constructor(){
		super("rennes");
	}

	preload() {
		this.load.image('rien','void.png');
		this.load.image('big_h','big_hover.png');
		this.load.image('big','big.png');
        this.load.image('medium_h','medium_hover.png');
        this.load.image('medium','medium.png');
        this.load.image('small','small.png');
        this.load.image('white','blanc.png');
	}

	create() {
		this.physics.add.image(0,0,'white').setScale(100,100);
		this.small = this.physics.add.image(950,540,'small');
		this.medium = this.physics.add.image(950,540,'medium');
		this.big = this.physics.add.image(950,540,'big');
		this.s = 1;
		this.mouse = this.physics.add.sprite(0,0,'rien');
		this.hover = 0;
    }
	update() {
		this.pointer = this.input.activePointer;
		switch (this.s) {
			case 1 :
				this.big.setPosition(950,540).setScale(0.4,0.4).setAlpha(1);
				this.medium.setPosition(950,540).setScale(1,1).setAlpha(0);
				this.small.setPosition(950,540).setScale(0.9,0.9).setAlpha(0);
				if (this.pointer.y < 487 && this.pointer.y > 287 && this.pointer.x < 963 && this.pointer.x > 700) {
					this.big.setTexture('big_h');
					this.hover = 1;
				}else{
					this.big.setTexture('big');
					this.hover = 0;
				}
				break;
			case 2 :
				this.big.setPosition(200,900).setAlpha(1).setTexture('big');
				this.medium.setPosition(950,540).setScale(1.7,1.7).setAlpha(1);
				this.small.setPosition(950,540).setScale(0.9,0.9).setAlpha(0);
				if (this.pointer.y < 835 && this.pointer.y > 324 && this.pointer.x < 1239 && this.pointer.x > 332) {
					this.medium.setTexture('medium_h');
					this.hover = 1;
				}else{
					this.medium.setTexture('medium');
					this.hover = 0;
				}
				if (this.pointer.y < 993 && this.pointer.y > 809 && this.pointer.x < 360 && this.pointer.x > 43) {
					if (this.big.scale < 0.15) {
						this.big.scale += 0.02;
					}
					if (this.pointer.isDown && this.big.scale < 0.2){
						this.s = 1;
						console.log("yes");
					}
				}else{
					if (this.big.scale > 0.13) {
						this.big.scale -= 0.02;
					}
				}
				break;
			case 3 :
				this.big.setPosition(950,540).setScale(0.24).setAlpha(0);
				this.medium.setPosition(250,900).setAlpha(1).setTexture('medium');
				this.small.setPosition(950,540).setScale(1.6).setAlpha(1);
				if (this.pointer.y < 1008 && this.pointer.y > 752 && this.pointer.x < 455 && this.pointer.x > 49) {
					if (this.medium.scale < 0.55) {
						this.medium.scale += 0.04;
					}
					if (this.pointer.isDown){
						this.s = 2;
					}
				}else{
					if (this.medium.scale > 0.5) {
						this.medium.scale -= 0.04;
					}
				}
				break;
		}
		if (this.pointer.isDown && this.hover == 1) {
			if (this.clic == 0) {
				switch (this.s) {
					case 1 : this.s = 2; break;
					case 2 : this.s = 3; break;
				}
				this.clic = 1;
			}
		}else{
			this.clic = 0;
		}
    }
}