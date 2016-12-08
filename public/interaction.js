var keyData = {
			q: {
				sound: new Howl({
		  		src: ['sounds/bubbles.mp3']
				}),
				color: 'blue',
				animation: bubbles
			},
			w: {
				sound: new Howl({
		  		src: ['sounds/clay.mp3']
				}),
				color: 'green'
			},
			e: {
				sound: new Howl({
		  		src: ['sounds/confetti.mp3']
				}),
				color: '#ffffff',
				animation: flashBack
			},
			r: {
				sound: new Howl({
		  		src: ['sounds/corona.mp3']
				}),
				color: 'green',
				animation: growCircle
			},
			t: {
				sound: new Howl({
		  		src: ['sounds/dotted-spiral.mp3']
				}),
				color: 'green',
				animation: moveCircle
			},
			y: {
				sound: new Howl({
		  		src: ['sounds/flash-1.mp3']
				}),
				color: '#42c5f4',
				animation: screenWipe
			},
			u: {
				sound: new Howl({
		  		src: ['sounds/flash-2.mp3']
				}),
				color: '#2ecc71',
				animation: flashBack
			},
			i: {
				sound: new Howl({
		  		src: ['sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					src: ['sounds/glimmer.mp3']
				}),
				color: '#8e44ad',
				animation: growSquare
			},
			p: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: '#f48600',
				animation: flashSide
			},
			a: {
				sound: new Howl({
		  		src: ['sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		src: ['sounds/piston-1.mp3']
				}),
				color: 'blue',
				animation: growSquare
			},
			d: {
				sound: new Howl({
		  		src: ['sounds/piston-2.mp3']
				}),
				color: '#e74c3c',
				animation: squareBubbles
			},
			f: {
				sound: new Howl({
		  		src: ['sounds/prism-1.mp3']
				}),
				color: '#95a5a6'
			},
			g: {
				sound: new Howl({
		  		src: ['sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		src: ['sounds/prism-3.mp3']
				}),
				color: '#d35400',
				animation: growSquare
			},
			j: {
				sound: new Howl({
		  		src: ['sounds/splits.mp3']
				}),
				color: '#1abc9c',
				animation: squareSpinBubbles
			},
			k: {
				sound: new Howl({
		  		src: ['sounds/squiggle.mp3']
				}),
				color: '#2ecc71',
				animation: bubbles
			},
			l: {
				sound: new Howl({
		  		src: ['sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		src: ['sounds/suspension.mp3']
				}),
				color: '#24dd13',
				animation: flashSide
			},
			x: {
				sound: new Howl({
		  		src: ['sounds/timer.mp3']
				}),
				color: '#34495e',
				animation: moveCircle
			},
			c: {
				sound: new Howl({
		  		src: ['sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		src: ['sounds/veil.mp3']
				}),
				color: '#27ae60',
				animation: growCircle
			},
			b: {
				sound: new Howl({
		  		src: ['sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
				src: ['sounds/zig-zag.mp3']
				}),
				color: '#8e44ad',
				animation: fallBubbles
			},
			m: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: '#2c3e50'
			}

		}

		var squares = [];
		var flashes = [];
		var circles = [];
		var growCircles = [];
		var moveCircles = [];
		var wipes = [];
		var bubbles = [];
		var squareBubbles = [];
		var squareSpinBubbles = [];
		var fallBubbles = [];
		var flashSides = [];

	 	function onKeyDown(event) {
	 		if (keyData[event.key] && keyData[event.key].animation) {
		 		keyData[event.key].animation();
		 		keyData[event.key].sound.play();
			} else if (keyData[event.key]) {
				shrinkCircle(keyData[event.key].color);
				keyData[event.key].sound.play();
			}
		}

		function onFrame(event) {
			for (var i = 0; i < squares.length; i++) {
				squares[i].rotate(5);
				squares[i].scale(1.2);
				var screenArea = (view.size.width * view.size.height);
				if (squares[i].area > screenArea) {
					removeShape(squares, i);
				}

			}
			for (var i = 0; i < flashes.length; i++) {
				flashes[i].scale(1, .8);
				if (flashes[i].area < 1) {
					removeShape(flashes, i);
				}
			}
			for (var i = 0; i < flashSides.length; i++) {
				flashSides[i].scale(.8, 1);
				if (flashSides[i].area < 1) {
					removeShape(flashSides, i);
				}
			}
			for (var i = 0; i < wipes.length; i++) {
				var x = (view.size.width * 1.5);
				var y = view.size.height / 2;
				var destination = new Point(x, y);
				var vector = destination - wipes[i].position;
				wipes[i].position += vector / 10;
				if (wipes[i].position === destination) {
					removeShape(wipes, i);
				}
			}
			for(var i = 0; i < circles.length; i++) {
				circles[i].fillColor.hue += 1;
				circles[i].scale(.9);
				if (circles[i].area < 1) {
					removeShape(circles, i);
				}
			}
			for(var i = 0; i < growCircles.length; i++) {
				growCircles[i].scale(1.1);
				var screenArea = (view.size.width * view.size.height);
				if (growCircles[i].area > screenArea) {
					removeShape(growCircles, i);
				}
			}

			// bubbles animation, shrink bubbles

			for(var i = 0; i < bubbles.length; i++) {
				bubbles[i].scale(.9);
				if (bubbles[i].area < 1) {
					removeShape(bubbles, i);
				}
			}
			
			for(var i = 0; i < squareBubbles.length; i++) {
				squareBubbles[i].scale(1.1);
				if (squareBubbles[i].area > 14000) {
					removeShape(squareBubbles, i);
				}
			}
			
			for(var i = 0; i < squareSpinBubbles.length; i++) {
				squareSpinBubbles[i].rotate(5);
				squareSpinBubbles[i].scale(.9);
				if (squareSpinBubbles[i].area < 1) {
					removeShape(squareSpinBubbles, i);
				}
			}
			
			for(var i = 0; i < fallBubbles.length; i++) {
				var destination = new Point(view.center);
				//destination.y += view.size.height / 2;
				var vector = destination - fallBubbles[i].position;
				fallBubbles[i].position += vector / 10;
				if (vector.length < 5) {
					removeShape(fallBubbles, i);
				}
			}

			// moveCircle animation, move then shrink

			for(var i = 0; i < moveCircles.length; i++) {
				var midpoint = view.size.height / 2;
				var right = view.size.width - 200;
				// var destination = new Point(200, midpoint);
				var destination = new Point(right, midpoint);		
				var vector = destination - moveCircles[i].position;
				moveCircles[i].position += vector / 10;
				if (vector.length < 5) {
					moveCircles[i].scale(.8);
				}
				if (moveCircles[i].position === destination && moveCircles[i].area < .01) {
					removeShape(moveCircles, i);
				}
			}
		}

		function growSquare() {
			var newSquare = new Path.Rectangle({
				center: view.center,
				size: [20, 20],
				strokeColor: this.color,
				strokeWidth: 2
			});
			squares.push(newSquare);
		}

		function growCircle() {
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle(point, 100);
			newCircle.strokeColor = randomColor();
			newCircle.strokeWidth = 6;
			growCircles.push(newCircle);
		}

		function bubbles() {
			for (var i = 0; i < 10; i++) {	
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var newCircle = new Path.Circle(point, 30);
				newCircle.strokeColor = randomColor();
				newCircle.strokeWidth = 2;
				bubbles.push(newCircle);
			}	
		}
		
		function fallBubbles() {
			for (var i = 0; i < 10; i++) {	
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var newCircle = new Path.Circle(point, 40);
				newCircle.strokeColor = randomColor();
				newCircle.strokeWidth = 2;
				fallBubbles.push(newCircle);
			}	
		}
		
		function squareBubbles() {
			for (var i = 0; i < 10; i++) {	
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var size = new Size(60, 60);
				var newSquare = new Path.Rectangle(point, size);
				newSquare.strokeColor = randomColor(),
				newSquare.strokeWidth = 2;
				squareBubbles.push(newSquare);
			}	
		}
		
		function squareSpinBubbles() {
			for (var i = 0; i < 20; i++) {	
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var size = new Size(100, 100);
				var newSquare = new Path.Rectangle(point, size);
				newSquare.strokeColor = randomColor(),
				newSquare.strokeWidth = 2;
				squareSpinBubbles.push(newSquare);
			}	
		}

		// whole screen rectangle shrinks vertically to center

		function flashBack() {
			var flash = new Path.Rectangle({
				center: view.center,
				height: myCanvas.height,
				width: myCanvas.width,
				fillColor: this.color,
			});
			flashes.push(flash);
		}
		
		function flashSide() {
			var flash = new Path.Rectangle({
				center: view.center,
				height: myCanvas.height,
				width: myCanvas.width,
				fillColor: this.color,
			});
			flashSides.push(flash);
		}

		// full screen wipe

		function screenWipe() {
			var wipe = new Path.Rectangle({
				center: view.center,
				height: myCanvas.height,
				width: myCanvas.width,
				fillColor: this.color,
			});
			wipes.push(wipe);
		}

		// shrinking circles in random places

		function shrinkCircle(color) {
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle({
				center: point, 
				radius: 500,
				fillColor: color
			});
			circles.push(newCircle);
		}

		// move circle from center to random point, then shrink

		function moveCircle() {
			var circleStart = new Point(200, view.size.height / 2);
			var newCircle = new Path.Circle(circleStart, 200);
			newCircle.fillColor = randomColor();
			moveCircles.push(newCircle);
		}

		// generate a random rgb color

		function randomColor() {
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			return "rgb(" + red + ", " + green + ", " + blue + ")"
		}
		
		// remove shape from canvas and corresponding array
		
		function removeShape(shape, i) {
			shape[i].remove();
			shape.splice(i, 1);
		}
