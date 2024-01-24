function setup() {
	createCanvas(windowWidth, windowHeight);
	gif_createCat.hide();
	gif_createDog.hide();
	gif_createDeer.hide();
}

function preload() {
  gif_loadCat = loadImage("nyancat.gif");//load nyancat image
  gif_createCat = createImg("nyancat.gif");//create nyancat image
  gif_loadDog = loadImage("dog.gif");//load dog image
  gif_createDog = createImg("dog.gif");//create dog image
  gif_loadDeer = loadImage("deerling.gif");//load deerling image
  gif_createDeer = createImg("deerling.gif");//create deerling image
}

function ChooseyourAnimal() {
  let animalButton = document.getElementsByName("animals");
   for (let i = 0; i < animalButton.length; i++) {
			 if (animalButton[i].checked) {
				 background("lightsteelblue");
				 chosenAnimal = animalButton[i].id
     		if (chosenAnimal == "nyancat"){
            // loadImage("nyancat.gif");
					gif_createCat.show();//show cat gif
					gif_createDog.hide();//hide dog gif
					gif_createDeer.hide();//hide deer gif
					// console.log("cat")
        	
     		} else if (chosenAnimal == "dog") {
            // loadImage("dog.gif");
					gif_createDog.show();
					gif_createCat.hide();
					gif_createDeer.hide();
					// console.log("dog")
				} else if (chosenAnimal == "deerling") {
          // loadImage("deerling.gif");
					gif_createDeer.show();
					gif_createCat.hide();
					gif_createDog.hide();
					// console.log("deer")
				 }
		 }
   }
}

