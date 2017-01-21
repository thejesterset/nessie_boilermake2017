//Grocery Item
var groc = {
	item: "none",
	price: 0
};

//Randomly generates number
function dothis(){
	var gen = Math.floor(Math.random() * 10);

	return gen;
}

//Using number generated to comeup with items and price
function assign(){
	var number = dothis();
	var statement;

	//Beginning of possible item list
	if(number == 0){
		statement = "Oh no we ran out of milk."
		console.log(statement);
		groc.item = "Milk";
		groc.price = 2.50;

	}else if(number == 1){
		statement = "oh no we ran out of bottled water."
		console.log(statement);
		groc.item = "Bottled Water";
		groc.price = 4.59;

	}else if(number == 2){
		statement = "Oh no we ran out of apples."
		console.log(statement);
		groc.item = "Apples";
		groc.price = 0.99;

	}else if(number == 3){
		statement = "Oh no we ran out of banannas."
		console.log(statement);
		groc.item = "Banannas";
		groc.price = 1.20;

	}else if(number == 4){
		statement = "Oh no we ran out of lettuce."
		console.log(statement);
		groc.item = "Lettuce";
		groc.price = 6.57;

	}else if(number == 5){
		statement = "Oh no we ran out of oranges."
		console.log(statement);
		groc.item = "Oranges";
		groc.price = 0.33;

	}else if(number == 6){
		statement = "Oh no we ran out of cucumbers."
		console.log(statement);
		groc.item = "Cucumbers";
		groc.price = 3.21;

	}else if(number == 7){
		statement = "Oh no we ran out of lemons."
		console.log(statement);
		groc.item = "Lemons";
		groc.price = 5.55;

	}else if(number == 8){
		statement = "Oh no we ran out of eggs."
		console.log(statement);
		groc.item = "Eggs";
		groc.price = 7.25;

	}else if(number == 9){
		statement = "Oh no we ran out of tomatoes."
		console.log(statement);
		groc.item = "Tomatoes";
		groc.price = 6.89;
	}//End of possible item list
}
//Runs the function 'assign'
assign();

console.log(groc.item + " " + groc.price);
