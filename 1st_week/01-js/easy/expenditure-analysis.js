/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let map = new Map();

  for(let i = 0 ; i < transactions.length; i++)
  {
    // if category is already present in map then update the price
    if(map.has(transactions[i].category))
    {
      let category = transactions[i].category;
      let price = transactions[i].price;
      let finalPrice = price + map.get(category);

      map.set(category,finalPrice);
    }
    //if category is not present in map then add it in the map
    else{
      let category = transactions[i].category;
      let price = transactions[i].price

      map.set(category,price);
    }
  }

  //To get the desired output format
  map.forEach((value,key)=>{
    const obj = {
      category : key,
      totalSpent: value
    }
    result.push(obj);
  })
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
