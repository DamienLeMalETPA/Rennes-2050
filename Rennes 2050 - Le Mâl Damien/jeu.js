var config = {
	type: Phaser.AUTO,
	width: 1900,
	height: 1080,
	scene: [Rennes],
	physics: {
        default: 'arcade',
        pixelArt: 'true',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);