/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

/* first variant(by me) */
function rentalCarCost(days) {
  const dailyCost = 40;
  let totalCost = days * dailyCost;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

/* second variant(by @!untrue, @fenriryao, @saksolga, @_Seven_) */
function rentalCarCost(days) {
	var dayCost = 40;
	
	var discount = 0;
	if(days >= 3) discount += 20;
	if(days >= 7) discount += 30;
	
	return dayCost * days - discount;
}