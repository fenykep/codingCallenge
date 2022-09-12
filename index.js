//function substitutes data with a local copy if I'm coding on the tram
require('dns').resolve('challenge.codingsans.com', function(err) {
  if (err) {
  	console.log("Cant connect, using local copy.")
  	const bakery = require('./bakery.json');
  	printData(bakery);
  } else {
     console.log("Connected, fetching data.")
     getData();
  }
});

async function getData(){
	fetch('https://challenge.codingsans.com/sources/bakery/bakery.json')
	    .then(res => res.json())
	    .then(bakery => {
	        printData(bakery);
	})
}

const godFatherDesire =[
  {
    "name": "Francia krémes",
    "amount": 300
  },
  {
    "name": "Rákóczi túrós",
    "amount": 200
  },
  {
    "name": "Képviselőfánk",
    "amount": 300
  },
  {
    "name": "Isler",
    "amount": 100
  },
  {
    "name": "Tiramisu",
    "amount": 150
  }];

async function printData(data){

	// solution for task 1
	// console.log("Last week's sales: " + getWeeklySales(data.salesOfLastWeek, data.recipes) + " Ft");
	//---------------------------------------------------------------

	// solution for task 2
	// console.log(altMenus(data.recipes));
	//---------------------------------------------------------------
	
	// var ingPriceList = ingPriceLister(data.wholesalePrices);
	// var profPerItem = recipeProfitLister(data.recipes, ingPriceList);

	// solution for task 3
	// console.log(getWeeklyProfit(data.salesOfLastWeek, profPerItem));
	console.log(getWeeklyProfit(data.salesOfLastWeek, data.wholesalePrices, data.recipes));
	//---------------------------------------------------------------

	// solution for task 4
	// console.log(JSON.stringify(useAllInvUp(data.recipes, data.inventory), null, 2));
	//---------------------------------------------------------------	

	// solution for task 5	
	// console.log('This  "order" will set us back ' + costOfCustomOrder(godFatherDesire, data.recipes, data.wholesalePrices) + " forints. Sad :( ");
	//---------------------------------------------------------------	

	// solution for task 6
	// console.log(JSON.stringify(prep4future(data.salesOfLastWeek, data.recipes, data.inventory, data.wholesalePrices, 2, 0.1), null, 2));
	//---------------------------------------------------------------	
}

//calculates ingredients to be ordered to last [weeks] based on [salesOfLastWeek]
//with a safety [overhead], with prices and amounts based off [wholesalePrices]
function prep4future(salesOfLastWeek, recipes, inventory, wholesalePrices, weeks, overhead){
	var orderList = [];
	for(const reci of salesOfLastWeek){
		var weeklySold = reci.amount;
		var ingList = findKey(recipes, "name", reci.name, "ingredients");

		for(const ing of ingList){
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			reqAmount = uSrp(ing.amount) / bulksize * weeks * (overhead+1) * weeklySold;
			var bulkOrderIndex = objInList(orderList, "name", ing.name);
			// if the ingredient is already in the list of ings to bulkorder,
			// then increase orderamount,
			// else add to the list
			if (bulkOrderIndex!=false) {
				orderList[bulkOrderIndex-1] = {
					"name": ing.name,
					"amount": Number(orderList[bulkOrderIndex-1].amount) + reqAmount,
					"totalPrice": 0
				}
			}
			else{
				orderList.push({
					"name": ing.name,
					"amount": reqAmount,
					"totalPrice": 0
				})
			}
		}
	}

	//remove those entries that we do not have to order
	for(const [index,ing] of orderList.entries()){
		ingsubstract = uSrp(findKey(inventory, "name", ing.name, "amount"));
		orderList[index].amount = ing.amount - ingsubstract;
		if (orderList[index].amount <= 0) {
			orderList.splice(index,1);
		}
	}

	//calculate the price of each bulk order
	for(const [index, ing] of orderList.entries()){
		divDer = findKey(wholesalePrices, "name", ing.name, "amount").split(' ');
		palettNo = Math.ceil(ing.amount / divDer[0]);
		price = palettNo * findKey(wholesalePrices, "name", ing.name, "price");
		orderList[index].amount = (palettNo * divDer[0]) + " " +  divDer[1];
		orderList[index].totalPrice = price;
	}

	//just trying out reordering the bulkOrderList according to the
	//wholesale list
	var newOrderList = [];
	for(const ing of wholesalePrices){
		var pushy = findKey(orderList, "name", ing.name);
		console.log(pushy);
		if(pushy){
			newOrderList.push(pushy);
		}
	}

	return orderList;
}

function objInList(list, key, keyVal){
	for(const [index,i] of list.entries()){
		if (i[key]==keyVal) {
			//typescript gyererám
			return index+1;
		}
	}
	return false;
}

//alphabetically sorts arrays of objects by their [name]
function alpSort(array, key){
	array.sort(function(a, b) {
	  return Intl.Collator().compare(a[key], b[key]);
	});
	return array;
}

//shorthand to strip tailing unit str
function uSrp(unitedVal){
	return unitedVal.split(' ')[0];
}

// looks for a value[keyVal] of [key] in array and 
// 		if retVal  is set, returns another variable of that object
//		ifnot returns the whole object
function findKey(array, key, keyVal, retVal){
	for (const i of array) {
	  if (i[key] == keyVal) {
	  		if (retVal === undefined) {
	  			return i;
	  		}
	  		else{
				return i[retVal];
	  		}
		}
	}
	return false;
}

//returns total sales of last week (task 1.)
function getWeeklySales(salesOfLastWeek, recipes){
	var weeklySum = 0;
	salesOfLastWeek.forEach(item => {
		var uPrice = uSrp(findKey(recipes,"name",item.name,"price"));
		// console.log(item.name + " " + uPrice + " Ft * " + item.amount+ " db  = " + uPrice*item.amount + " Ft");
		weeklySum += uPrice*item.amount;
	});
	return weeklySum;
}

//calculates the profit made from given weeks sales and the precalculated profit made
//selling each item
// function getWeeklyProfit(salesOfLastWeek, profPerItem){
function getWeeklyProfit(salesOfLastWeek, wholesalePrices, recipes){
	// var ingPriceList = ingPriceLister(wholesalePrices);
	// var profPerItem = recipeProfitLister(recipes, ingPriceLister(wholesalePrices));
	// console.log(ingPriceList);
	// console.log(profPerItem);
	// console.log(wholesalePrices);
	// var ingPriceList = ingPriceLister(wholesalePrices);
	var profPerItem = recipeProfitLister(recipes, ingPriceLister(wholesalePrices));

	var weeklyProfit = 0;
	salesOfLastWeek.forEach(item => {
		weeklyProfit += item.amount * profPerItem[item.name];
	})
	return weeklyProfit;
}

//returns how many of the given item we can produce with given inventory
function useOneInvUp(recipe, inv) {
	//quasi smallest denominator
	var smllDenom;
	var retObj = {};
	for (const i of recipe.ingredients) {
	 	var avabAmount = findKey(inv, "name", i.name, "amount");
	 	avabAmount.split(' ')[1]=='pc'?avabAmount=(uSrp(avabAmount))*1:avabAmount=(uSrp(avabAmount))*1000;
	 	reqAmount = uSrp(i.amount);
	 	if(!((avabAmount/reqAmount) > smllDenom)){
	 		smllDenom = Math.floor(avabAmount/reqAmount);
	 	}
	}
	retObj.name = recipe.name;
	retObj.amount = smllDenom;
	return retObj;
}

//function to calculate how many of each item on the menu we can produce if we were
//to use our whole inventory up for all the recipes one by one
//(so all the flour and sugar for x, then all the initial flour and sugar for y)
function useAllInvUp(recipes, inventory){
	var useInvUp = [];
	for (const r of recipes) {
		useInvUp.push(useOneInvUp(r,inventory));
	}
	return alpSort(useInvUp, "name");
}

//generates inclusive menus for dietary-restricted people
function altMenus(recipes){
	altMenu = {
		  "glutenFree": [],
		  "lactoseFree": [],
		  "lactoseAndGlutenFree": []
		}
	for (const i of recipes) {
		goodRec = {
			"name":i.name,
			"price":i.price
		}
		console.log(goodRec);
		if(i.lactoseFree&&i.glutenFree){
			altMenu.lactoseAndGlutenFree.push(goodRec);
		}
		else if(i.lactoseFree){
			altMenu.lactoseFree.push(goodRec);
		}
		else if(i.glutenFree){
			altMenu.glutenFree.push(goodRec);
		}
	}
	return JSON.stringify(altMenu, null, 2);
}

//returns the cost of producing one recipe
//takes in a recipe object, and the wholesale price of ingredients
function prodPriceCalc(recipe, ingPriceList){
	var price = 0;

	for (const i of recipe.ingredients) {
		price += ingPriceList[i.name] * i.amount.split(' ')[0];
	}
	return price
}

//returns the profit per selling one item from the menu
function recipeProfitLister(recipes, ingPriceList){
	var recProfList={};
	for(const r of recipes){
		recProfList[r.name] = r.price.split(' ')[0] - prodPriceCalc(r, ingPriceList);
	}
	return recProfList;
}

function costOfCustomOrder(order, recipes, wholesalePrices){
	var losses = 0;
	var nedAmnt = 0;
	for(const gfd of order){
		var ingList = findKey(recipes, "name", gfd.name, "ingredients");
		for(const ing of ingList){
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			losses += findKey(wholesalePrices, "name", ing.name, "price") * Math.ceil(uSrp(ing.amount)*gfd.amount / uSrp(findKey(wholesalePrices, "name", ing.name, "amount"))/bulksize);
		}
	}
	return losses;
}

//generates an object where keys are ingredients and values are price per smaller unit
function ingPriceLister(ingredients){
	var ingPriceList={};
	for (const i of ingredients) {
		ingPriceList[i.name] = ppSmall(i);
	}
	// return JSON.stringify(ingPriceList);
	return ingPriceList;
}

//returns the price of ingredient in the unit used by the recipes
function ppSmall(ingredient){
	var sPrice = 0;
	if (ingredient.amount.split(' ')[1]!='pc') {
		sPrice = ingredient.price / ingredient.amount.split(' ')[0] / 1000;
	}
	else{
		sPrice = ingredient.price / ingredient.amount.split(' ')[0];
	}
	return sPrice;
}