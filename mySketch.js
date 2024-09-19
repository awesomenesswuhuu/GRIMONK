// Most of the assigned time for this assignment went in deciding what story to pick. Now I've come to the conclusion that I have to deduct from the resources I have ie. the sprites, the backgrounds, and the functions I know. 
// This story will be cerculating the journey of grim reaper through the principles of Taoism, an ancient chinese art. This will be like a crash course in Taoism. The lens of criticality will focus on the rapid increase in media consumption and a key on how to break out of it. 
// New update - This story is going to follow the journey of a newly appointed grim reaper who meets a buddhist monk and how they share their philosophy. I'm trying to build it up as I go along, kind of like a director. I'm really enjoying the process. 
let ln //lightning
let gmlogo
let gr
let bg
let base
let m = 0
let scenes = []
let currentScene = 0
let bl = true
let invsp //invisible sprite 
let thunder;
let hasPlayed = false;
let hitcheck = false
let bgmus
let lev
let colide = false
let colide1 = false
let intro = []
let monk
let pixelhouse
let normalguy
let popcornguy
let popatac
let showPop = false;
let showPop2 = false;
let showPop3 = false;
let monkded = false;

let ding = false;
let dude
let templesteps
let contact
let monkaction = false
let monkmovement = false
let invis
let invis2






//pre-loading everything 
function preload() {

	//pre-loading sounds 	
	soundFormats('mp3')
	thunder = loadSound('thunder.mp3');
	bgmus = loadSound('bgmus.mp3')

	//pre-loading font 
	font = loadFont('Micro5-Regular.ttf')

	//creating scenes 

	//scene 0 
	scenes[0] = {
		background: "rgb(2,2,252)",
		right: 1,
	}

	//scene 1	
	scenes[1] = {
		background: "rgb(0,0,0)",
		right: 2,
		left: 0

	}

	//scene 2	
	scenes[2] = {
		background: loadImage('red sky wallpaper.jpeg'),
		//		right: 3,
		left: 1

	}

	//scene 3
	scenes[3] = {
		background: loadImage('bg10 copy.png'),
		right: 4,
		//	left: 2

	}

	//scene 4
	scenes[4] = {
		background: loadImage('bg2.png'),
		right: 5,
		left: 3
	}

	//scene 5
	scenes[5] = {
		background: loadImage('bg3.png'),
		left: 4,
		//	right: 6
	}


	//scene 6
	scenes[6] = {
		background: loadImage('office.png'),
		left: 5,
		right: 7
	}

	//scene 7
	scenes[7] = {
		background: loadImage('bg11.webp'),
		left: 6,
		right: 8
	}

	//scene 8
	scenes[8] = {
		background: loadImage('bg1.jpeg'),
		left: 7,
		right: 9
	}

	//scene 9
	scenes[9] = {
		background: loadImage('bg12.webp'),
		//	left: 8
		right: 9
	}

	//scene 10
	scenes[10] = {
		background: loadImage('altbg.png'),
		// left: 8
	//	right: 11
	}

	//scene 11
	scenes[11] = {
		background: loadImage('tearoom.webp'),
		left: 10
		//	right: 9
	}

	//scene 12
	scenes[12] = {
		background: loadImage('mountain.webp'),
		//	left: 10
		right: 13
	}

	//scene 13
	scenes[13] = {
		background: loadImage('bgsea.webp')
		//	left: 10
		//	right: 9
	}

	//scene 14
	scenes[14] = {
		background: loadImage('fantasygarden.png'),
		//	left: 10
		right: 15
	}

	//scene 15
	scenes[15] = {
		background: loadImage('sakurabg.webp'),
		//	left: 10
		right: 16
	}

	//scene 16
	scenes[16] = {
		background: loadImage('badplace.webp'),
		//	left: 10
		right: 17
	}

	//scene 17
	scenes[17] = {
		background: loadImage('goodbad.webp')
		//	left: 10
		//	right: 9
	}

	//scene 18
	scenes[18] = {
		background: loadImage('middle copy.png')
		//	left: 10
		//	right: 9
	}

		//scene 19
	scenes[19] = {
		background: loadImage('lastscene.webp')
		//	left: 10
		//	right: 9
	}
	

	//CHARACTERS

	// pre-loading HOME

	// bg.debug = true
	// base.debug = true
	// invsp.debug = true
	// thunder.debug = true
	// lev.debug = true
	// monk.debug = true
	// normalguy.debug = true
	// popcornguy.debug = true
	// popatac.debug = true
	// dude.debug = true
	// templesteps.debug = true
	// contact.debug = true

	pixelhouse = new Sprite()
	pixelhouse.scale = 0.4
	// pixelhouse.debug = true


	pixelhouse.addAni('idle', 'pixelhouse.png', {
			frameSize: [1024, 1024]
		}),

		//pre-loading GRIM REAPER

		gr = new Sprite(),
		gr.layer = 2,
		// gr.debug = true

		//idle 

		gr.addAni('idle', 'PassiveIdleReaper-Sheet.png', {
			frameSize: [240 / 5, 48],
			frames: 5
		}),

		//run

		gr.addAni('run', 'PassiveRunningReaper-Sheet.png', {
			frameSize: [384 / 8, 48],
			frames: 8
		}),

		//eyes

		gr.addAni('eyes', 'HostileIdleReaper-Sheet.png', {
			frameSize: [240 / 5, 48],
			frames: 5
		}),

		gr.addAni('kill', 'HostileAttackReaper-Sheet.png', {
			frameSize: [480 / 10, 48.003], //480 x 48.003
			frames: 10
		}),

		//pre-loading BASE

		base = new Sprite(),
		base.addAni('moss', 'base.png'),
		base.visible = false,

		//pre-loading LOGO 

		gmlogo = new Sprite(),
		// gr.debug = true,
		gmlogo.addAni('logo', 'GM logo.jpg'),
		gmlogo.x = 530,
		gmlogo.y = 200,
		gmlogo.scale = 1.2,
		gmlogo.layer = 1,
		gmlogo.visible = false,
		// gmlogo.debug = true,


		//pre-loading scene 1 levitating sprite 

		lev = new Sprite(),
		lev.visible = false,
		// lev.debug = true,

		//pre-loading scene 0 lightning sprite 

		ln = new Sprite(),
		ln.x = 500,
		ln.y = 200,
		ln.scale = 2.4,
		ln.layer = 3,
		ln.visible = false,
		// ln.debug = true,
		ln.height = 600,
		ln.width = 0.1,
		ln.offset.x = 30,
		ln.addAni('lnn', 'ln.png', {
			frameSize: [2048 / 4, 512],
			frames: 4
		}),

		normalguy = new Sprite(),
		normalguy.visible = false
	// normalguy.debug = true
	normalguy.scale = 4.5,
		normalguy.addAni('coffee', 'Normal_Guy_Drinks_SpriteSheet.png', {
			frameSize: [60 / 4, 60 / 3],
			frames: 11
		}),

		normalguy.addAni('buff', 'Normal_Guy_Transforms_SpriteSheet.png', {
			frameSize: [145 / 5, 150 / 6],
			frames: 25
		}),


		popcornguy = new Sprite(),
		// popcornguy.debug = true,
		popcornguy.scale = 5.5,
		popcornguy.mirror.x = true
	popcornguy.visible = false,
		popcornguy.addAni('popidle', 'popidle.png', {
			frameSize: [120 / 4, 15.9983],
			frames: 4
		}),

		popcornguy.addAni //120 x 80
	('popatack', 'PopAttack.png', {
		frameSize: [120 / 4, 80 / 5],
		frames: 20
	}),

	Pop = loadImage("pop.png"),
		office = loadImage("boringoffice.png"),
		elevator = loadImage("Evelator.png"),
		normalguyded = loadImage("normalguy last frame.png"),
		teapot = loadImage("lilteapot.png"),
		teatbl = loadImage("teatbl1.png"),
		unimug = loadImage('unicornmug.png'),
		purmug = loadImage('purplemug.png'),
		mountmeditate = loadImage('meditate_13.png'),
		sakura1 = loadImage('sakura sprite.png'),
		sakura2 = loadImage('sakura sprite copy.png'),
		sakura3 = loadImage('sakura sprite copy 2.png'),
		sakura4 = loadImage('sakura sprite copy 3.png'),


		boat = new Sprite(),
		boat.scale = 0.5,
		boat.layer = -1,
		boat.x = 200,
		boat.y = 900,
		boat.addAni('boat', 'boat.png', {
			frameSize: [1024, 1024]
		}),


		templesteps = new Sprite(),
		// templesteps.debug = true,
		templesteps.visible = false,

		contact = new Sprite(),
		// contact.debug = true,

		contact.visible = false,

		invis = new Sprite(),
		invis.x = 1500,
		invis.y = 900,
		invis.visible = false

	invis2 = new Sprite(),
		invis2.x = -1500,
		invis2.y = -900,
		invis2.visible = false

	monk = new Sprite(),
		// monk.debug = true
		monk.offset.y = 50,
		monk.x = -100,
		monk.y = -50,
		// monk.debug = true,
		monk.width = 25,
		//	monk.visible = false
		monk.scale = 4,

		monk.addAni('meditate',
			'meditate_10.png',
			'meditate_10.png',

			'meditate_11.png',
			'meditate_11.png',

			'meditate_12.png',
			'meditate_12.png',

			'meditate_13.png',
			'meditate_13.png',

			'meditate_14.png',
			'meditate_14.png',

			'meditate_15.png',
			'meditate_15.png')


	monk.addAni('idle', 'idle_1.png',
		'idle_2.png',
		'idle_3.png',
		'idle_4.png',
		'idle_5.png',
		'idle_6.png')

	monk.addAni('up',
		'j_up_1.png',
		'j_up_2.png',
		'j_up_3.png')

	monk.addAni('airkick',
		'air_atk_1.png',
		'air_atk_2.png',
		'air_atk_3.png',
		'air_atk_4.png',
		'air_atk_5.png',
		'air_atk_6.png',
		'air_atk_7.png')

	monk.addAni('run',
		'run_1.png',
		'run_2.png',
		'run_3.png',
		'run_4.png',
		'run_5.png',
		'run_6.png',
		'run_7.png',
		'run_8.png')



	smoke1 = new Sprite()
	smoke1.scale = 0.5

	smoke1.addAni('smoke1', 'Smoke1.png', {
			frameSize: [576 / 6, 96],
			frames: 6
		}),

		smoke2 = new Sprite()
	smoke2.scale = 0.5

	smoke2.addAni('smoke2', 'Smoke2.png', {
		frameSize: [576 / 6, 96],
		frames: 6
	})

}

function setup() {
	createCanvas(1100, 600);
	textFont(font)

	//LABEL 

	//GRIM REAPER properties  


	gr.x = 10
	gr.y = 455
	gr.scale = 2.75
	base.x = 555
	base.y = 730
	gr.height = 50
	gr.width = 50

	//BASE properties 

	base.scale = 1.21

	//overlaps 
	gr.overlaps(monk)
	gr.overlap(contact)
	// monk.overlaps(contact)
	// monk.overlaps(base)
	// monk.overlaps(templesteps)

	gr.overlaps(pixelhouse)
	gr.overlaps(base)
	gr.overlaps(gmlogo)
	gr.overlaps(lev)
	gr.overlaps(ln)
	gr.overlaps(normalguy)
	gr.overlaps(popcornguy)
	gr.overlaps(templesteps)
	gr.overlaps(contact)
	gr.overlaps(monk)


	base.overlaps(gr)
	base.overlaps(pixelhouse)
	base.overlaps(gmlogo)
	base.overlaps(lev)
	base.overlaps(ln)
	base.overlaps(normalguy)
	base.overlaps(popcornguy)
	base.overlaps(templesteps)
	base.overlaps(contact)
	base.overlaps(monk)


	normalguy.overlaps(gr)
	normalguy.overlaps(pixelhouse)
	normalguy.overlaps(base)
	normalguy.overlaps(lev)
	normalguy.overlaps(ln)
	normalguy.overlaps(normalguy)
	normalguy.overlaps(gmlogo)
	normalguy.overlaps(templesteps)
	normalguy.overlaps(contact)
	normalguy.overlaps(monk)

	monk.overlaps(gr)
	monk.overlaps(pixelhouse)
	monk.overlaps(base)
	monk.overlaps(lev)
	monk.overlaps(ln)
	monk.overlaps(normalguy)
	monk.overlaps(popcornguy)
	monk.overlaps(templesteps)
	monk.overlaps(contact)
	monk.overlaps(gmlogo)

	smoke1.overlaps(gr)
	smoke1.overlaps(pixelhouse)
	smoke1.overlaps(base)
	smoke1.overlaps(lev)
	smoke1.overlaps(ln)
	smoke1.overlaps(normalguy)
	smoke1.overlaps(popcornguy)
	smoke1.overlaps(templesteps)
	smoke1.overlaps(contact)
	smoke1.overlaps(gmlogo)
	smoke1.visible = false


	smoke2.overlaps(gr)
	smoke2.overlaps(pixelhouse)
	smoke2.overlaps(base)
	smoke2.overlaps(lev)
	smoke2.overlaps(ln)
	smoke2.overlaps(normalguy)
	smoke2.overlaps(popcornguy)
	smoke2.overlaps(templesteps)
	smoke2.overlaps(contact)
	smoke2.overlaps(gmlogo)
	smoke2.visible = false

	monk.overlaps(boat)
	gr.overlaps(boat)
	invis.overlaps(boat)
	base.overlaps(boat)
	invis2.overlaps(gr)
	invis2.overlaps(monk)



	// debugs 
	// gr.debug = true

}

function draw() {
	clear();
	background(scenes[currentScene].background);


	//CONTROLS

	if (kb.pressing('right')) {
		gr.changeAni('run');
		gr.mirror.x = false
		gr.velocity.x = 8
	} else if (kb.pressing('left')) {
		gr.changeAni('run');
		gr.mirror.x = true
		gr.velocity.x = -8
	} else {
		gr.changeAni('eyes')
		gr.velocity.x = 0
		gr.velocity.y = 0
	}

	if (kb.pressing('k')) {
		gr.changeAni('kill');
	}

	//CONDITIONALS 

	// SCENE 0 

	base.visible = !false

	if (currentScene === 0) {
		gmlogo.visible = true
		// gmlogo.ani.play()

	} else {

		//idk which of the three i should use, since none of them are stoppping the animation as noted in the console log
		// gmlogo.ani.stop()
		// gmlogo.visible = false
		gmlogo.remove()

	}


	//LIGHTNING 

	if (currentScene === 0 && gr.x >= 500) {
		ln.visible = true
	} else {
		ln.visible = false
	}

	//THUNDER + MUSIC

	if (currentScene === 0 && !thunder.isPlaying() && !hasPlayed && gr.x >= 500) {
		thunder.play()
		bgmus.play()
	}

	//GR + LIGHTNING + EYES

	if (gr.x < 500) {
		gr.changeAni('idle')
	}

	if (gr.overlaps(ln) || hitcheck) { //remember, hitcheck = flase
		hitcheck = true
		gr.changeAni('eyes')
		if (kb.pressing('k')) {
			gr.changeAni('kill');
		}
	}

	//SCENE 1

	//LEVITATING SPRITE POSITION


	if (currentScene === 1) {

		ln.remove()

		lev.x = 600
		lev.y = 500

	} else {
		lev.x = 1200
		lev.y = -200
	}

	// GRIM REAPER + LEVITATING 

	//remember - colide = false

	if (gr.overlap(lev) || colide && gr.y > 250) {
		colide = true
		gr.changeAni('idle')
		gr.velocity.x = 0
		gr.y = gr.y - 2
	}
	if (kb.presses('down') || !colide && gr.y < 455 && lev.x >= 1) {
		colide = false
		gr.y = gr.y + 2
		lev.remove()
	}


	if (currentScene === 1 && colide && gr.y < 250) {
		fill('white')
		textSize(35)
		text('"a" for left', 275, 250)
		text('"k" for kill', 500, 125)
		text('"d" for right', 750, 250)
		text('"x" for interact', 500, 375)
		textSize(50)
		text('Press "s" to begin', 430, 80)
	}

	//SCENE 2

	if (currentScene === 2) {

		lev.remove()

		pixelhouse.x = 800
		pixelhouse.y = 380

	} else {
		pixelhouse.x = 1500
		pixelhouse.y = 800
	}


	if (currentScene === 2 && gr.x > 250) {
		fill("white")
		//	rect(200, 50, 200, 50)
		textSize(40)
		text("collect your first soul", 150, 90)
	}

	if (currentScene === 2 && gr.x > 620 && kb.pressing('x')) {
		currentScene = 3,
			gr.x = 200,
			gr.y = 540
	}


	//SCENE 3

	if (currentScene === 3) {
		popcornguy.x = 950
		popcornguy.y = 540

	} else {
		popcornguy.x = 650
		popcornguy.y = 740
	}

	if (currentScene === 3) {

		base.visible = false
		popcornguy.visible = true

		popcornguy.changeAni('popidle')

		if (gr.x > 250) {
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Popcorn Guy : Who are you and kindly stop', 0, 25)
		}

		if (gr.x > 400) {
			popcornguy.changeAni('popatack')
		}

		if (gr.x > 600) {
			popcornguy.mirror.x = false
			popcornguy.x = 820

		}

		if (gr.x > 500) {
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Grim Reaper : cant stop wont stop ', 0, 25)
		}

		gr.overlaps(popcornguy)

		if (kb.pressing('k')) {
			showPop = true;
		}
	}


	if (showPop) {
		image(Pop, 900, 20, 70, 60);
		popcornguy.remove();

	}


	//SCENE 4 

	if (currentScene === 4) {
		gr.y = 455

		base.visible = !false


		if (gr.x > 100) {
			fill('white')
			noStroke()
			rect(100, 100, 200, 50)
			fill('black')
			textSize(32)
			text(' That sure was fun ', 100, 140)
		}

		if (gr.x > 500) {
			fill('white')
			noStroke()
			rect(400, 200, 280, 50)
			fill('black')
			textSize(32)
			text(' I have an aptitude for this', 400, 240)
		}

		if (gr.x > 800) {
			fill('white')
			noStroke()
			rect(800, 300, 260, 50)
			fill('black')
			textSize(32)
			text('  Now on to the next one', 800, 340)
		}
	}

	//SCENE 5

	if (currentScene === 5) {
		base.visible = !false

		image(office, 600, 10, 600, 600);
		if (gr.x > 690 && kb.pressing('x')) {
			ding = true

		}

		if (ding) {
			background("black")
			image(elevator, 300, 200, 200, 300)
			base.visible = false
			fill('white')
			textSize(38)
			text('  The floor you want to go to is the total number of human senses ', 250, 100)

			if (gr.x < 550 && kb.pressing('5')) {
				currentScene = 6
				gr.y = 465
				gr.x = 200
			}
		}
	}



	//SCENE 6

	if (currentScene === 6) {
		// gr.x = 200
		// gr.y = 465
		gr.overlaps(normalguy)
		base.visible = false
		normalguy.visible = true
		normalguy.x = 950
		normalguy.y = 470
		normalguy.mirror.x = true
		normalguy.changeAni('coffee')

		if (gr.x < 400) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : being shirtless in an office space is a crime against humanity ', 0, 25)
		}

		if (gr.x > 400) {
			normalguy.changeAni('buff')
		}
		if (kb.pressing('k')) {
			showPop2 = true;
		}
	}


	if (showPop2) {
		image(normalguyded, 970, 20, 50, 60);
		normalguy.remove();

	}

	//SCENE 7

	if (currentScene === 7) {
		if (gr.x > 100) {
			fill('white')
			noStroke()
			rect(100, 100, 100, 50)
			fill('black')
			textSize(32)
			text(' I mean ', 100, 140)
		}

		if (gr.x > 500) {
			fill('white')
			noStroke()
			rect(400, 200, 100, 50)
			fill('black')
			textSize(32)
			text(' Atleast', 400, 240)
		}

		if (gr.x > 800) {
			fill('white')
			noStroke()
			rect(800, 300, 250, 50)
			fill('black')
			textSize(32)
			text('  Give me a challenge', 800, 340)
		}
	}

	//SCENE 8

	if (currentScene === 8) {
		//templesteps.visible = true
		templesteps.x = 600
		templesteps.y = 500

		if (gr.overlaps(templesteps) || colide1 && gr.x < 750 && gr.y > 300) {
			colide1 = true
			gr.velocity.x = 0
			gr.x = gr.x + 1
			gr.y = gr.y - 3
		}

		if (gr.y === 300) {
			(currentScene = 9)
			templesteps.remove()
			monk.x = 200
			monk.y = 250
			gr.x = 1000
		}

	}

	if (currentScene === 9) {



		contact.x = 550
		contact.y = 540
		base.visible = false
		monk.visible = true
		monk.changeAni('meditate')

		if (gr.x < 900) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : It doesnt get more boring than a meditating monk ', 0, 25)
		}

		if (gr.x < 800) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Welcome Grim ', 0, 25)
		}

		if (gr.x < 700) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : Hey Monk, wait how do you know my name?  ', 0, 25)
		}

		if (gr.x < 600) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Because I spent all this time at this monestary being awesome  ', 0, 25)
		}

		if (gr.x < 500) {
			monk.changeAni('idle')
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : Lil cocky for someone about to get killed, lets just finish this off  ', 0, 25)
		}


		if (kb.pressing('k') && gr.x < 300 && showPop) {
			showPop3 = true;
			background('black')
		}
		if (showPop3) {
			background('black')
			gr.velocity.x = 0

		}

		if (monk.overlap(contact) || showPop3 && monk.y > 50) {
			background("black"),
				monk.changeAni('up'),
				monk.x = 550,
				monk.y = monk.y - 1

		}

		if (monk.y === 50) {
			monk.changeAni('airkick')
			fill('white')
			textSize(35)
			text('"a" for left', 275, 250)
			text('"d" for right', 500, 125)
			text('"x" for interact', 750, 250)
			//x	text('"x" for interact', 500, 375)
			textSize(50)
			text('The Monk', 490, 40)
			text('Press "s" to begin', 430, 80)

		}

		if (kb.presses('down')) {
			currentScene = 10
			gr.x = 50
			monk.x = 150
			monk.y = 230
			monk.changeAni('idle')

		}
	}


	//SCENE 10 


	if (currentScene === 10) {
		contact.remove()
		monkaction = !monkaction
		monkmovement = true
		image(teapot, 900, 380, 100, 100)


		if (monk.x < 200) {
			fill('white')
			rect(0, 0, 400, 50)
			fill('black')
			textSize(32)
			text(' GR : So....that was really cool... ', 0, 25)
		} else if (monk.x < 400) {
			fill('white')
			rect(100, 100, 400, 50)
			fill('black')
			textSize(32)
			text(' GR : How did you die so awesomely? ', 100, 125)
		} else if (monk.x < 600) {
			fill('white')
			rect(200, 200, 550, 50)
			fill('black')
			textSize(32)
			text(' GR : If youd want to tell me how, I wouldnt stop you ', 200, 225)
		} else if (monk.x < 800) {
			fill('white')
			rect(300, 300, 350, 50)
			fill('black')
			textSize(32)
			text(' Monk : Come lets get some tea ', 300, 325)
		}

		if (monk.x > 850 && kb.pressing('x')) {
			currentScene = 11,
				monk.x = 150,
				gr.x = 50

			invis.x = 0
			invis.y = 550
		}

	}

	//	SCENE 11

	if (currentScene === 11) {
		monk.changeAni('meditate')

		monkmovement = false
		if (kb.pressing('x')) {
			invis.x = invis.x + 2
		}

		smoke1.visible = true
		smoke2.visible = true
		base.visible = false

		image(purmug, 650, 400, 35, 35)
		image(unimug, 410, 400, 35, 35)
		smoke1.x = 420
		smoke1.y = 370
		smoke1.changeAni('smoke1')
		smoke2.x = 660
		smoke2.y = 370
		smoke2.changeAni('smoke2')
		monk.x = 320
		monk.y = 200
		gr.x = 780
		gr.y = 420
		gr.mirror.x = true
		fill('black')
		textSize(32)
		text(' keeping pressing x to start a chat ', 375, 100)

		fill('white')
		rect(0, 0, 1100, 50)
		fill('black')
		textSize(32)
		text(' Monk : How may I help you ', 0, 25)


		if (invis.x > 70) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : Everyone I kill is so freaked out about death... ', 0, 25)
		}

		if (invis.x > 170) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Gr : You gave in without a single thought, how...? ', 0, 25)
		}


		if (invis.x > 270) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Thats exactly how, without a single thought ', 0, 25)

		}

		if (invis.x > 370) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : Whats exactly how?', 0, 25)

		}

		if (invis.x > 470) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : Can you please stop being so cryptic?', 0, 25)

		}

		if (invis.x > 570) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Wow I wasnt even trying to be cryptic, I just gave you the most direct answer possible', 0, 25)

		}

		if (invis.x > 670) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : People meditate for DECADES for the piece of information I just gave you', 0, 25)

		}

		if (invis.x > 770) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Alright fine, finish your tea', 0, 25)

		}

		if (invis.x > 870) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : were going for an adventure', 0, 25)

		}

		if (invis.x > 900) {
			currentScene = 12
			gr.x = 50
			monk.x = 150
			monk.y = 220
		}

	}

	//SCENE 12

	if (currentScene === 12) {
		monkmovement = true
		invis.remove()
		smoke1.remove()
		smoke2.remove()
		image(mountmeditate, 250, 150, 700, 350)

		if (monk.x > 200) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Look at me, young and naive', 0, 25)

		}

		if (monk.x > 500) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR : You do look pretty naive. Naive enough to kill', 0, 25)

		}

		if (monk.x > 700) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : I realized something really fascinating this day', 0, 25)

		}

		if (monk.x > 900) {

			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR  : Pray tell', 0, 25)

		}

		if (monk.x > 1100) {
			currentScene = 13

			boat.changeAni('boat')
			boat.x = 200
			boat.y = 500
			gr.x = 120
			gr.y = 425
			monk.x = 230
			monk.layer = 4

		}
	}

	//SCENE 13

	if (currentScene === 13) {
		monk.changeAni('idle')
		monkmovement = false
		base.visible = false
		gr.velocity.x = 0
		monk.velocity.x = 0

		if (kb.pressing('x')) {
			boat.x = boat.x + 2
			gr.x = gr.x + 2
			monk.x = monk.x + 2
		}

		if (boat.x > 100) {
			fill('white')
			noStroke()
			rect(100, 100, 200, 50)
			fill('black')
			textSize(32)
			text(' You see, thoughts.. ', 100, 140)
		}

		if (boat.x > 500) {
			fill('white')
			noStroke()
			rect(400, 200, 380, 50)
			fill('black')
			textSize(32)
			text(' Are like an endless stream of water', 400, 240)
		}

		if (boat.x > 800) {
			fill('white')
			noStroke()
			rect(800, 300, 250, 50)
			fill('black')
			textSize(32)
			text(' They are ever flowing', 800, 340)
		}

		if (boat.x > 1000) {
			currentScene = 14
			gr.x = 50
			monk.x = 150
		}

	}

	//SCENE 14

	if (currentScene === 14) {
		base.visible = true
		boat.remove()
		monkmovement = true

		if (monk.x > 100) {
			fill('white')
			noStroke()
			rect(100, 100, 250, 50)
			fill('black')
			textSize(32)
			text(' One can use that water to ', 100, 140)
		}

		if (monk.x > 500) {
			fill('white')
			noStroke()
			rect(400, 200, 340, 50)
			fill('black')
			textSize(32)
			text(' grow a fantasy garden ', 400, 240)
		}

		if (monk.x > 800) {
			fill('white')
			noStroke()
			rect(800, 300, 230, 50)
			fill('black')
			textSize(32)
			text(' In their minds', 800, 340)
		}

		if (monk.x > 1099) {
			currentScene = 15
			gr.x = 50
			gr.y = 550
			monk.x = 150
			monk.y = 330
		}

	}

	//SCENE 15

	if (currentScene === 15) {

		monkmovement = true

		base.visible = false
		if (monk.x > 100) {
			image(sakura1, 480, 120, 150, 350)
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' GR: Wait what? A fantasy garden? ', 0, 25)
		}
		if (monk.x > 300) {
			image(sakura2, 475, 120, 160, 350)
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Yeah, basically building good thoughts', 0, 25)
		}
		if (monk.x > 500) {
			image(sakura3, 470, 120, 170, 350)
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Upon good thoughts', 0, 25)
		}
		if (monk.x > 800) {
			image(sakura4, 450, 120, 200, 350)
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : Upon even more good thoughts', 0, 25)
		}

		if (monk.x > 1000) {
			fill('white')
			rect(0, 0, 1100, 50)
			fill('black')
			textSize(32)
			text(' Monk : You get the point', 0, 25)
		}

		if (monk.x > 1099) {
			currentScene = 16
			gr.x = 50
			gr.y = 350
			monk.x = 150
			monk.y = 220
		}

	}

	//SCENE 16

	if (currentScene === 16) {

		base.visible = false
		
		monkmovement = true

		if (monk.x > 100) {
			fill('white')
			noStroke()
			rect(100, 100, 310, 50)
			fill('black')
			textSize(32)
			text(' Monk : But sometimes people..', 100, 140)
		}

		if (monk.x > 500) {
			fill('white')
			noStroke()
			rect(400, 200, 400, 50)
			fill('black')
			textSize(32)
			text(' ..build scary landscapes in their mind ', 400, 240)
		}

		if (monk.x > 800) {
			fill('white')
			noStroke()
			rect(800, 300, 290, 50)
			fill('black')
			textSize(32)
			text('..and its hard to find help', 800, 340)
			
			
			if(monk.x > 1099){
				currentScene = 17
			}


		}

	}

	//SCENE 17

	if (currentScene === 17) {
				monkmovement = false

		monk.changeAni('idle')
		base.visible = false
		gr.x = 550
		monk.x = 100
		gr.y = 300

		fill('white')
		rect(0, 0, 1100, 50)
		fill('black')
		textSize(32)
		text(' Monk : Which side do you think would be the best for a human life? ', 0, 25)

		fill('white')
		rect(50, 200, 100, 50)
		fill('black')
		textSize(32)
		text(' Press L ', 50, 225)

		fill('white')
		rect(950, 200, 100, 50)
		fill('black')
		textSize(32)
		text(' Press R ', 950, 225)

		if (kb.pressing('l') || (kb.pressing('r'))) {
			currentScene = 18
		}
	}

	if (currentScene === 18) {
		
		monkmovement = false

monk.changeAni('idle')
		monk.x = 50
		fill('white')
		rect(0, 0, 1100, 50)
		fill('black')
		textSize(32)
		text(' Monk : Trick question! Theres a secret way, nutrality! This path is usually uncovered with rectrospection  ', 0, 25)

		if (kb.pressing('x')) {
			currentScene = 19
		}

	}
	
		if (currentScene === 19) {
			base.visible = false

fill('white')
		rect(0, 0, 1100, 50)
		fill('black')
		textSize(32)
		text(' Sometimes its best to just watch the water flow and not interact with it', 0, 25)
			
			
			gr.scale = 1.2
			gr.x = 550
			gr.y = 140
			monk.scale = 2
			monk.changeAni('idle')
			monk.x = 600
			monk.y = 0
			
		}
			



	//SETTING UP ADJESCENT SCENES 

	if (gr.x > width) {
		if (scenes[currentScene].right != undefined) {
			currentScene = scenes[currentScene].right
			gr.x = 0
		} else {
			gr.x = width
		}
	} else if (gr.x < 0) {
		if (scenes[currentScene].left != undefined) {
			currentScene = scenes[currentScene].left
			gr.x = width
		}

	}


	if (monkaction) {
		if (monk.x > width) {
			if (scenes[currentScene].right != undefined) {
				currentScene = scenes[currentScene].right
				monk.x = 0
			} else {
				monk.x = width
			}
		} else if (monk.x < 0) {
			if (scenes[currentScene].left != undefined) {
				currentScene = scenes[currentScene].left
				monk.x = width
			}

		}
	}

	if (monkmovement) {
		if (kb.pressing('right')) {
			monk.changeAni('run');
			monk.mirror.x = false
			monk.velocity.x = 8
		} else if (kb.pressing('left')) {
			monk.changeAni('run');
			monk.mirror.x = true
			monk.velocity.x = -8
		} else {
			monk.changeAni('idle')
			monk.velocity.x = 0
			monk.velocity.y = 0
		}
	}

}




//A.overlaps(B)

//--------

//if (currentScene ===0) {
// if(mouseidpressed) {
// 	currentScene =1
// }
// fox.visible = false
// }else{
// 	fox.visible = true
// }

//-------

////if (currentScene ===0) {
// if(mouseidpressed) {
// 	currentScene =1
// }
// }
// 	fox.visible = currentScene !==0


//	gmlogo.changeAni('logo')}








// if (currentScene === 0) {
// logo();
// 	ln();
// }


// 	i = scenes[0]
// bl = i
// if (bl === true) {
// //	if (currentScene === 0) {
// 		gmlogo.changeAni('logo')
// 		ln.changeAni('ln')
// 	}

// if (bl === false) {
// //if (currentScene === 1, 2, 3) {
// 		gmlogo.remove()
// 		ln.remove()
// }





// i = scenes[0]
// bl = i
// if (bl === true) {
// 	if (gr.x = width / 2) {
// 		ln.ln,
// 			gmlogo.logo
// 	}

// 	if (bl === false) {
// 		ln.remove()
// 		gmlogo.remove()
// 	}




// 	} else if (gr.x < 0) {
// 		currentScene = scenes[currentScene].left

// 		gr.x = width}




// how to change scnees based on overlap 

// if(sprite.overlap(bgname)) {
// 	currentScene = 1 }

// if(kb.pressed(b)) {
// 	currentScene = 1 }


//invisible floor 
//let floor 
//floor = new Sprite (width/2, height - 50, width, 5, 'static')
//floor.visible = false
//world.gravity.y = 10


//if(kb.pressed('space')) {
// x.changeAni(["death", "idle"])
// x.velocity.y = -2






// 		if (monk.x < 300) {
// 			fill('white')
// 			rect(0, 0, 1100, 50)
// 			fill('black')
// 			textSize(32)
// 			text(' Monk: Told you Im awesome, took quite a few births to get it right', 0, 25)
// 		}

// 		if (monk.x < 400) {
// 			fill('white')
// 			rect(0, 0, 1100, 50)
// 			fill('black')
// 			textSize(32)
// 			text(' GR: I mean if youd want to tell me how, I guess I wouldnt mind hearing', 0, 25)
// 			}

// 	 if (monk.x < 500) {
// 		 fill('white'),
// 		 rect(0, 0, 1100, 50),
// 		 fill('black'),
// 		 textSize(32),
// 		 text(' Monk: It would be easier to show you now that Im, you know, dead', 0, 25)
// 						 }

// 						 }



// if(monk.overlaps(contact) && monk.y > 0){
// 		monk.y = monk.y - 3 }

//	if (gr.overlap(lev) || colide && gr.y > 250) {


//Why didn't this work ;_;
// monk.changeAni('up')
// if (monk.x < 600) {
// 	monk.x = monk.x + 1

// monk.debug = true

// 		if (monk.x === 600) {
// 			if (monk.y > 300) {
// 				monk.changeAni('up'),
// 				monk.y = monk.y - 1
// 			}
// 		}






// if (gr.overlap(lev) || colide && gr.y > 250) {
// colide = true
// gr.changeAni('idle')
// gr.velocity.x = 0
// gr.y = gr.y - 2

//WIND EFFECT 	

// 	if(gr.overlaps(templesteps) || !colide && gr.x < 600 &&gr.y > 450) {
// 	colide = false
// 	gr.velocity.x = +1
// 	gr.velocity.y = -1
// }

// if (gr.overlap(lev) || colide && gr.y > 250) {
// 	colide = true
// 	gr.changeAni('idle')
// 	gr.velocity.x = 0
// 	gr.y = gr.y - 2

// bg.debug = true
// base.debug = true
// invsp.debug = true
// thunder.debug = true
// lev.debug = true
// monk.debug = true
// pixelhouse.debug = true
// normalguy.debug = true
// popcornguy.debug = true
// popatac.debug = true
// dude.debug = true
// templesteps.debug = true
// contact.debug = true