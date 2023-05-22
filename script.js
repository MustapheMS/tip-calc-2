console.log("hello");

// 😎😎💯💯👍👍

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.20;
    }
  }
  const bill = 200;
  const tip = calcTip(bill);
  
  console.log(`The bill is ${bill}, and the tip amount is ${tip}.`);
    
