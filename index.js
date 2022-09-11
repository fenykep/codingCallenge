//you should learn how to open a local json :)
const bakery = {
  "recipes": [
    {
      "name": "Francia krémes",
      "price": "420 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "2 pc" },
        { "name": "sugar", "amount": "1000 g" },
        { "name": "fruit", "amount": "60 g" },
        { "name": "milk", "amount": "1000 ml" },
        { "name": "butter", "amount": "70 g" },
        { "name": "flour", "amount": "300 g" }
      ]
    },
    {
      "name": "Gesztenyés krémes",
      "price": "500 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "6 pc" },
        { "name": "sugar", "amount": "600 g" },
        { "name": "milk", "amount": "200 ml" },
        { "name": "butter", "amount": "70 g" },
        { "name": "flour", "amount": "1000 g" }
      ]
    },
    {
      "name": "Csokis krémes",
      "price": "500 Ft",
      "lactoseFree": false,
      "glutenFree": true,
      "ingredients": [
        { "name": "egg", "amount": "2 pc" },
        { "name": "sugar", "amount": "300 g" },
        { "name": "fruit", "amount": "70 g" },
        { "name": "vanilin sugar", "amount": "60 g" },
        { "name": "chocolate", "amount": "10 g" },
        { "name": "milk", "amount": "400 ml" },
        { "name": "butter", "amount": "50 g" },
        { "name": "gluten-free flour", "amount": "700 g" }
      ]
    },
    {
      "name": "Gyümölcsös krémes",
      "price": "450 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "7 pc" },
        { "name": "sugar", "amount": "300 g" },
        { "name": "fruit", "amount": "60 g" },
        { "name": "vanilin sugar", "amount": "80 g" },
        { "name": "soy-milk", "amount": "600 ml" },
        { "name": "flour", "amount": "1000 g" }
      ]
    },
    {
      "name": "Rigó Jancsi",
      "price": "450 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "3 pc" },
        { "name": "sugar", "amount": "600 g" },
        { "name": "chocolate", "amount": "100 g" },
        { "name": "soy-milk", "amount": "200 ml" },
        { "name": "flour", "amount": "900 g" }
      ]
    },
    {
      "name": "Tiramisu",
      "price": "600 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "3 pc" },
        { "name": "sugar", "amount": "400 g" },
        { "name": "fruit", "amount": "80 g" },
        { "name": "vanilin sugar", "amount": "20 g" },
        { "name": "milk", "amount": "800 ml" },
        { "name": "butter", "amount": "60 g" },
        { "name": "flour", "amount": "500 g" }
      ]
    },
    {
      "name": "Rákóczi túrós",
      "price": "500 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "6 pc" },
        { "name": "sugar", "amount": "200 g" },
        { "name": "fruit", "amount": "10 g" },
        { "name": "vanilin sugar", "amount": "70 g" },
        { "name": "chocolate", "amount": "20 g" },
        { "name": "soy-milk", "amount": "300 ml" },
        { "name": "flour", "amount": "800 g" }
      ]
    },
    {
      "name": "Isler",
      "price": "500 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "2 pc" },
        { "name": "sugar", "amount": "400 g" },
        { "name": "fruit", "amount": "80 g" },
        { "name": "milk", "amount": "500 ml" },
        { "name": "butter", "amount": "50 g" },
        { "name": "flour", "amount": "900 g" }
      ]
    },
    {
      "name": "Mákos habos",
      "price": "550 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "4 pc" },
        { "name": "sugar", "amount": "100 g" },
        { "name": "vanilin sugar", "amount": "10 g" },
        { "name": "soy-milk", "amount": "800 ml" },
        { "name": "flour", "amount": "900 g" }
      ]
    },
    {
      "name": "Képviselőfánk",
      "price": "700 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "1 pc" },
        { "name": "sugar", "amount": "900 g" },
        { "name": "vanilin sugar", "amount": "60 g" },
        { "name": "milk", "amount": "600 ml" },
        { "name": "butter", "amount": "90 g" },
        { "name": "flour", "amount": "500 g" }
      ]
    },
    {
      "name": "Ekler fánk",
      "price": "700 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "4 pc" },
        { "name": "sugar", "amount": "100 g" },
        { "name": "vanilin sugar", "amount": "20 g" },
        { "name": "chocolate", "amount": "80 g" },
        { "name": "milk", "amount": "900 ml" },
        { "name": "butter", "amount": "20 g" },
        { "name": "flour", "amount": "1000 g" }
      ]
    },
    {
      "name": "Flódni",
      "price": "580 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "8 pc" },
        { "name": "sugar", "amount": "400 g" },
        { "name": "vanilin sugar", "amount": "20 g" },
        { "name": "chocolate", "amount": "100 g" },
        { "name": "soy-milk", "amount": "600 ml" },
        { "name": "flour", "amount": "800 g" }
      ]
    },
    {
      "name": "Zserbó",
      "price": "520 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "10 pc" },
        { "name": "sugar", "amount": "200 g" },
        { "name": "fruit", "amount": "40 g" },
        { "name": "chocolate", "amount": "30 g" },
        { "name": "milk", "amount": "1000 ml" },
        { "name": "butter", "amount": "80 g" },
        { "name": "flour", "amount": "500 g" }
      ]
    },
    {
      "name": "Mézes krémes",
      "price": "450 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "8 pc" },
        { "name": "sugar", "amount": "700 g" },
        { "name": "vanilin sugar", "amount": "80 g" },
        { "name": "milk", "amount": "900 ml" },
        { "name": "butter", "amount": "60 g" },
        { "name": "flour", "amount": "300 g" }
      ]
    },
    {
      "name": "Túrós pite",
      "price": "450 Ft",
      "lactoseFree": false,
      "glutenFree": true,
      "ingredients": [
        { "name": "egg", "amount": "7 pc" },
        { "name": "sugar", "amount": "300 g" },
        { "name": "chocolate", "amount": "60 g" },
        { "name": "milk", "amount": "600 ml" },
        { "name": "butter", "amount": "60 g" },
        { "name": "gluten-free flour", "amount": "600 g" }
      ]
    },
    {
      "name": "Meggyes pite",
      "price": "450 Ft",
      "lactoseFree": true,
      "glutenFree": true,
      "ingredients": [
        { "name": "egg", "amount": "3 pc" },
        { "name": "sugar", "amount": "800 g" },
        { "name": "vanilin sugar", "amount": "50 g" },
        { "name": "chocolate", "amount": "10 g" },
        { "name": "soy-milk", "amount": "800 ml" },
        { "name": "gluten-free flour", "amount": "700 g" }
      ]
    },
    {
      "name": "Linzerkarika",
      "price": "380 Ft",
      "lactoseFree": true,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "2 pc" },
        { "name": "sugar", "amount": "200 g" },
        { "name": "vanilin sugar", "amount": "30 g" },
        { "name": "chocolate", "amount": "70 g" },
        { "name": "soy-milk", "amount": "300 ml" },
        { "name": "flour", "amount": "300 g" }
      ]
    },
    {
      "name": "Kókusz golyó",
      "price": "320 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "7 pc" },
        { "name": "sugar", "amount": "800 g" },
        { "name": "fruit", "amount": "10 g" },
        { "name": "milk", "amount": "800 ml" },
        { "name": "butter", "amount": "80 g" },
        { "name": "flour", "amount": "900 g" }
      ]
    },
    {
      "name": "Borzaska",
      "price": "350 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "8 pc" },
        { "name": "sugar", "amount": "600 g" },
        { "name": "vanilin sugar", "amount": "70 g" },
        { "name": "chocolate", "amount": "100 g" },
        { "name": "milk", "amount": "500 ml" },
        { "name": "butter", "amount": "60 g" },
        { "name": "flour", "amount": "500 g" }
      ]
    },
    {
      "name": "Gesztenye szív",
      "price": "420 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "1 pc" },
        { "name": "sugar", "amount": "1000 g" },
        { "name": "fruit", "amount": "70 g" },
        { "name": "chocolate", "amount": "10 g" },
        { "name": "milk", "amount": "500 ml" },
        { "name": "butter", "amount": "60 g" },
        { "name": "flour", "amount": "900 g" }
      ]
    },
    {
      "name": "Minyon",
      "price": "450 Ft",
      "lactoseFree": false,
      "glutenFree": false,
      "ingredients": [
        { "name": "egg", "amount": "10 pc" },
        { "name": "sugar", "amount": "800 g" },
        { "name": "chocolate", "amount": "90 g" },
        { "name": "milk", "amount": "500 ml" },
        { "name": "butter", "amount": "100 g" },
        { "name": "flour", "amount": "600 g" }
      ]
    }
  ],
  "inventory": [
    { "name": "flour", "amount": "350 kg" },
    { "name": "gluten-free flour", "amount": "122 kg" },
    { "name": "egg", "amount": "1213 pc" },
    { "name": "sugar", "amount": "522 kg" },
    { "name": "milk", "amount": "451 l" },
    { "name": "soy-milk", "amount": "221 l" },
    { "name": "butter", "amount": "267 kg" },
    { "name": "vanilin sugar", "amount": "91 kg" },
    { "name": "fruit", "amount": "178 kg" },
    { "name": "chocolate", "amount": "167 kg" }
  ],
  "salesOfLastWeek": [
    { "name": "Gyümölcsös krémes", "amount": 132 },
    { "name": "Rigó Jancsi", "amount": 140 },
    { "name": "Tiramisu", "amount": 352 },
    { "name": "Rákóczi túrós", "amount": 319 },
    { "name": "Isler", "amount": 553 },
    { "name": "Mákos habos", "amount": 444 },
    { "name": "Képviselőfánk", "amount": 165 },
    { "name": "Ekler fánk", "amount": 310 },
    { "name": "Flódni", "amount": 178 },
    { "name": "Zserbó", "amount": 299 },
    { "name": "Mézes krémes", "amount": 255 },
    { "name": "Túrós pite", "amount": 123 },
    { "name": "Meggyes pite", "amount": 194 }
  ],
  "wholesalePrices": [
    { "name": "flour", "amount": "10 kg", "price": 1500 },
    { "name": "gluten-free flour", "amount": "10 kg", "price": 3000 },
    { "name": "egg", "amount": "12 pc", "price": 240 },
    { "name": "sugar", "amount": "10 kg", "price": 1200 },
    { "name": "milk", "amount": "10 l", "price": 2000 },
    { "name": "soy-milk", "amount": "10 l", "price": 4000 },
    { "name": "butter", "amount": "1 kg", "price": 2000 },
    { "name": "vanilin sugar", "amount": "1 kg", "price": 3000 },
    { "name": "fruit", "amount": "10 kg", "price": 2000 },
    { "name": "chocolate", "amount": "10 kg", "price": 2000 }
  ]
};

async function getData(){
	fetch('https://challenge.codingsans.com/sources/bakery/bakery.json')
	    .then(res => res.json())
	    .then(bakery => {
	        printData(bakery);
	})
}

// ifOnline
//getData();
printData(bakery);

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
	//console.log(altMenus(data.recipes));
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
	for(const gfd of godFatherDesire){
		var ingList = findKey(recipes, "name", gfd.name, "ingredients");
		console.log(">ereceptbű kell " + gfd.amount);
		for(const ing of ingList){
			console.log("e Ingből kell " + ing.amount);
			console.log("szóval összesen " + uSrp(ing.amount)*gfd.amount);
			//console.log("ami kerül " + ing.price);
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			console.log("nagyker ad " + uSrp(findKey(data.wholesalePrices, "name", ing.name, "amount"))*bulksize + ing.amount.split(' ')[1]);
			console.log("hánypaletta kell: " + Math.ceil(uSrp(ing.amount)*gfd.amount / uSrp(findKey(data.wholesalePrices, "name", ing.name, "amount"))/bulksize));
			console.log("nagykerÁr/bulk: " + findKey(data.wholesalePrices, "name", ing.name, "price"));
			console.log("Ehhez a termékhez, ennek az adott ingNek az ára " + findKey(data.wholesalePrices, "name", ing.name, "price") * Math.ceil(uSrp(ing.amount)*gfd.amount / uSrp(findKey(data.wholesalePrices, "name", ing.name, "amount"))/bulksize) + "Ft");
			losses += findKey(data.wholesalePrices, "name", ing.name, "price") * Math.ceil(uSrp(ing.amount)*gfd.amount / uSrp(findKey(data.wholesalePrices, "name", ing.name, "amount"))/bulksize);
		}
	}
	// console.log("Palikám bukott " + losses + " forintot. Sad :( ");
	//---------------------------------------------------------------	

	// solution for task 6
	// 
	var orderList = [];
	for(const reci of data.salesOfLastWeek){
	
		var weeklySold = reci.amount;
		var ingList = findKey(data.recipes, "name", reci.name, "ingredients");

		for(const ing of ingList){
			var bulksize = ing.amount.split(' ')[1]=='pc' ? 1:1000;
			reqAmount = uSrp(ing.amount) / bulksize * 2.1 * weeklySold;
			// reqAmount = Math.round(reqAmount*10000)/10000;
			// console.log("ingName: " + ing.name + " ing amount: " + uSrp(ing.amount) + " reqAmount: " + reqAmount);
			// console.log("weeklySold: " + weeklySold);
			// console.log("bulksize: " + bulksize);
			var bulkOrderIndex = objInList(orderList, "name", ing.name);
			// alma[0].amount = Number(alma[0].amount.split(' ')[0]) + reqAmount + ' ' + alma[0].amount.split(' ')[1]
			//if the ingredient is already in the list of ings to bulkorder, then increase orderamount,
			//else ad to the list
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

	console.log(JSON.stringify(orderList, 1, 1));

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
// if code breaks, remove the retVal undef case and the return false if
// keyVal not found
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