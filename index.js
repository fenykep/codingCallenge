//function substitutes data with a local copy if I'm coding on the metro
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
	var recipes = alpSort(data.recipes);

	// solution for task 1
	//console.log("Last week's sales: " + getWeeklySales(data) + " Ft");
	//---------------------------------------------------------------

	// solution for task 2
	console.log(altMenus(data.recipes));
	//---------------------------------------------------------------
	
	var ingPriceList = ingPriceLister(data.wholesalePrices);
	var profPerItem = recipeProfitLister(data.recipes, ingPriceList);

	// solution for task 3
	// console.log(getWeeklyProfit(data, profPerItem));
	//---------------------------------------------------------------

	// solution for task 4
	// var useInvUp = [];
	// for (const r of recipes) {
	// 	useInvUp.push(useOneInvUp(r,data.inventory));
	// }
	// console.log(JSON.stringify(useInvUp, null, 3));
	//---------------------------------------------------------------	

	// solution for task 5
	var losses = 0;
	var nedAmnt = 0;
	// for(const gfd of godFatherDesire){
	// 	var ingList = findKey(recipes, "name", gfd.name, "ingredients");
	// 	console.log(">ereceptbű kell " + gfd.amount);
	// 	for(const ing of ingList){
	// 		var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
	// 		losses += findKey(data.wholesalePrices, "name", ing.name, "price") * Math.ceil(uSrp(ing.amount)*gfd.amount / uSrp(findKey(data.wholesalePrices, "name", ing.name, "amount"))/bulksize);
	// 	}
	// }
	// console.log("Palikám bukott " + losses + " forintot. Sad :( ");
	//---------------------------------------------------------------	

	// solution for task 6
	// 
	//		console.log(inPol7(data, 2, 0.1));

	var orderList = [];
	for(const reci of data.salesOfLastWeek){
	
		var weeklySold = reci.amount;
		var ingList = findKey(data.recipes, "name", reci.name, "ingredients");

		for(const ing of ingList){
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			reqAmount = uSrp(ing.amount) / bulksize * 2.2 * weeklySold;
			// reqAmount = Math.round(reqAmount*10000)/10000;
			var bulkOrderIndex = objInList(orderList, "name", ing.name);
			// if the ingredient is already in the list of ings to bulkorder,
			// then increase orderamount,
			// else ad to the list
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

	for(const [index,ing] of orderList.entries()){
		ingsubstract = uSrp(findKey(data.inventory, "name", ing.name, "amount"));
		orderList[index].amount = ing.amount - ingsubstract;
		if (orderList[index].amount <= 0) {
			orderList.splice(index,1);
		}

	}

	for(const [index, ing] of orderList.entries()){
		divDer = findKey(data.wholesalePrices, "name", ing.name, "amount").split(' ');
		palettNo = Math.ceil(ing.amount / divDer[0]);
		price = palettNo * findKey(data.wholesalePrices, "name", ing.name, "price");
		orderList[index].amount = (palettNo * divDer[0]) + " " +  divDer[1];
		orderList[index].totalPrice = price;

	}

	// console.log(JSON.stringify(orderList, null, 2));

}

function inPol7(salesOfLastweek, recipes, inventory, wolesalePrices, weeks, overead){
	var orderList = [];
	for(const reci of salesOfLastWeek){
		var weeklySold = reci.amount;
		var ingList = findKey(recipes, "name", reci.name, "ingredients");

		for(const ing of ingList){
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			reqAmount = uSrp(ing.amount) / bulksize * weeks * (overead+1) * weeklySold;
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
		price = palettNo * findKey(data.wholesalePrices, "name", ing.name, "price");
		orderList[index].amount = (palettNo * divDer[0]) + " " +  divDer[1];
		orderList[index].totalPrice = price;
	}
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
function alpSort(array){
	array = array.sort((a,b)=> {
		var a1 = a.name.toLowerCase();
		var b1 = b.name.toLowerCase();
		return a1<b1 ?-1:a1> b1? 1 :0;
	})
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
function getWeeklySales(data){
	var weeklySum = 0;
	data.salesOfLastWeek.forEach(item => {
		var uPrice = uSrp(findKey(data.recipes,"name",item.name,"price"));
		// console.log(item.name + " " + uPrice + " Ft * " + item.amount+ " db  = " + uPrice*item.amount + " Ft");
		weeklySum += uPrice*item.amount;
	});
	return weeklySum;
}

function getWeeklyProfit(data, profPerItem){
	var weeklyProfit = 0;
	data.salesOfLastWeek.forEach(item => {
		weeklyProfit += item.amount * profPerItem[item.name];
	})
	return weeklyProfit;
}

//return
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