const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
	orderCount++; 
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5; 
};

let orderCount = 0; 

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
//print total cost 
console.log(getSubTotal(orderCount));

