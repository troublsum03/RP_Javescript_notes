// Build out the Dinner app but this time in JAVASCRIPT!

// # Bottega Diner
// # Have a Main Menu, and a Sides Menu
// # You get one entree and two side choices at regular cost.
// # - show them the entire menu (print out)
// # - User selects an entree.
// # - “Waitress” makes a comment based on their selection
// # - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
// # - Tell them the price
// # - repeat the above options for side choices (suggestion and a price, don’t repeat chef suggestion)
// # - total up the cost
// BONUS
// # Have a breakfast, lunch and dinner menu.  Breakfast has different items, lunch and dinner have the same items but are different prices.
// # BONUS: Allow for item customization (how items are prepared, decide additional cost implications)
const lunch =  ['burger','pizza', 'hotdog', 'catfish']
const side =  ['fries','tots', 'onion rings', 'corn']

eatSmoke = () => {
  alert('Welcome to the Eat & Smoke! My name is Budmaster and I will be your server for this afternoon. Take a look at our menu.');
  alert(lunch);
  Order();
} 
Order = () => {
  var answer = prompt('Ready to order? What can I get you?');
    if (answer ===  lunch[0]) {
    console.log(`"Great choice! Here is your ${answer}"`);
    } else if (answer === lunch[1]){
    console.log(`"Great choice! Here is your ${answer}"`);
    } else if (answer === lunch[2]){
    console.log(`"Great choice! Here is your ${answer}"`);  
    } else if (answer === lunch[3]){
    console.log(`"Great choice! Here is your ${answer}"`)  
    } else {
      alert("Sorry, we only serve the items on the menu");
      Order();
    }
}



eatSmoke();


//  Bottega Diner
//  Have a Main Menu, and a Sides Menu
//  You get one entree and two side choices at regular cost.
//  - show them the entire menu (print out)

//  - User selects an entree.
//  - “Waitress” makes a comment based on their selection
//  - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
//  - Tell them the price

//  - repeat the above options for side choices (suggestion and a price, don’t repeat chef suggestion)
//  - total up the cost
// BONUS
//  Have a breakfast, lunch and dinner menu.  Breakfast has different items, lunch and dinner have the same items but are different prices.
//  BONUS: Allow for item customization (how items are prepared, decide additional cost implications)

const entrees = {
    chk: {
      name: " Gourmet Chicken Nugget Platter",
      cost: 30.33
    },
  
    stk: {
      name: " 78 oz. Steak",
      cost: 50.86
    },
  
    cb: {
      name: " Quadruple Cheeseburger",
      cost: 25.99
    }
  }
  
  const sides = {
    fries: {
      name: " Literally a bucket of Fries? You want chesse or chill or both?",
      cost: 15.34
    },
  
    salad: {
      name: " 'You'd-choose-a-salad-over-fries?' Salad",
      cost: 9.99
    },
  
    chips: {
      name: " 10/4 Roger Roger Chips",
      cost: 10.04
    }
  }
  
  const welcome = () => {
    alert(`Welcome to Our Diner! Take a look at our menu!`)
    alert(`
      Menu     
      Entrees          $${entrees.chk.cost}:${entrees.chk.name}
                            $${entrees.stk.cost}:${entrees.stk.name}
                            $${entrees.cb.cost}:${entrees.cb.name}
  
      Sides             $${sides.fries.cost}: ${sides.fries.name}
                            $${sides.salad.cost}: ${sides.salad.name}
                            $${sides.chips.cost}: ${sides.chips.name}
    `);
  }
  
  let entree; 
  let side1; 
  let side2;
  let total;
  let entreePrice;
  let side1Price; 
  let side2Price; 
  
  
  const order = () => {
    orderEntree();
    orderSides();
    confirmOrder();
  }
  
  const orderEntree = () => {
    entree = prompt(`What would you like for your Entree?
    (you can just type Chicken, Steak, or Burger)
  
      $${entrees.chk.cost}:${entrees.chk.name}
      $${entrees.stk.cost}:${entrees.stk.name}
      $${entrees.cb.cost}:${entrees.cb.name}
    `).toUpperCase();
    if(entree == "CHICKEN") {
      let confirmEntree = prompt(`The${entrees.chk.name} will be $${entrees.chk.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmEntree == "YES") {alert(`Great choice! That's my personal favorite ;)`);}
      else{orderEntree();}
    }
    else if(entree == "STEAK") {
      let confirmEntree = prompt(`The${entrees.stk.name} will be $${entrees.stk.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmEntree == "YES") {alert(` Wow, You must be hungry! ;) 
  
    (by the way, if you can eat that whole thing in 20 minutes, it's FREE! XD)`);}
      else{orderEntree();}
    }
    else if(entree == "BURGER") {
      let confirmEntree = prompt(`The${entrees.cb.name} will be $${entrees.cb.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmEntree == "YES") {
        alert(`Hey...`); 
        alert(`Wanna know a secret?`); 
        alert(`(The Burger is actually 40 patties tall. We just didn't know the word for 40-tuple...)`);
        alert(`...`); 
      }
      else{orderEntree();}
    }
    else {
      alert(`Sorry, I didn't catch that.`)
      orderEntree();
    }
  }
  
  const orderSides = () => {
    orderSide1();
    orderSide2();
  }
  
  const orderSide1 = () => {
    side1 = prompt(`What would you like for your First Side?
    (you can just type Fries, Salad, or Chips)
  
      $${sides.fries.cost}:${sides.fries.name}
      $${sides.salad.cost}:${sides.salad.name}
      $${sides.chips.cost}:${sides.chips.name}
    `).toUpperCase();
    if(side1 == "FRIES") {
      let confirmSide1 = prompt(`The${sides.fries.name} will be $${sides.fries.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide1 == "YES") {alert(`Great choice! Our fries are the best in the state!`);}
      else{orderSide1();}
    }
    else if(side1 == "SALAD") {
      let confirmSide1 = prompt(`The${sides.salad.name} will be $${sides.salad.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide1 == "YES") {alert(`...`); alert(`okay what do you REALLY want for your First Side?`);orderSide1();}
      else{orderSide1();}
    }
    else if(side1 == "CHIPS") {
      let confirmSide1 = prompt(`The${sides.chips.name} will be $${sides.chips.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide1 == "YES") {alert(`Nice choice! Our chips are handcrafted to be delicious! `);}
      else{orderSide1();}
    }
    else {
      alert(`Sorry, I didn't catch that.`)
      orderSide1();
    }
  }
  
  const orderSide2 = () => {
    side2 = prompt(`What would you like for your Second Side?
    (you can just type Fries, Salad, or Chips)
    `).toUpperCase();
    if(side2 == "FRIES") {
      let confirmSide2 = prompt(`The${sides.fries.name} will be $${sides.fries.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide2 == "YES") {alert(`Oh I'm hungry now. Those fries are to die for...`);}
      else{orderSide2();}
    }
    else if(side2 == "SALAD") {
      let confirmSide2 = prompt(`The${sides.salad.name} will be $${sides.salad.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide2 == "YES") {alert(`...`); alert(`fine. I'll get you a stupid salad.`);}
      else{orderSide2();}
    }
    else if(side2 == "CHIPS") {
      let confirmSide2 = prompt(`The${sides.chips.name} will be $${sides.chips.cost}. Is that what you want?`).toString().toUpperCase();
      if(confirmSide2 =="YES") {alert(`Great choice! Our chips are really yummy ;)`);}
      else{orderSide2();}
    }
    else {
      alert(`Sorry, I didn't catch that.`)
      orderSide2();
    }
  }
  
  const confirmOrder = () => {
    let orderConfirm = prompt(`Ok, let me make sure I got your order right. You want ${entree} for your Entree and ${side1} and ${side2} as your two sides?`).toString().toUpperCase();
    if(orderConfirm =="YES") {
      alert(`Great! I'll send that to the chef! ;)`);
    }
    else if(orderConfirm =="NO"){changeOrder();}
    else {
      alert(`Sorry, I didn't catch that.`)
      confirmOrder();
    }
  }
  
  const changeOrder = () => {
      let wrongOrder = prompt(`What do you want to change, your Entree or your Sides?`).toString().toUpperCase();
      if(wrongOrder =="ENTREE") {orderEntree();confirmOrder();}
      else if(wrongOrder =="SIDES"){orderSides();confirmOrder();}
      else {
        alert(`Sorry, I didn't catch that.`)
        changeOrder();
      }
  }
  
  checkout = () => {
  
    if(entree == "CHICKEN") {
      entreePrice = entrees.chk.cost;
    }
    else if(entree == "STEAK") {
      entreePrice = entrees.stk.cost;
    }
    else if(entree == "BURGER") {
      entreePrice = entrees.chk.cost;
    }
  
    if(side1 == "FRIES") {
      side1Price = sides.fries.cost;
    }
    else if(side1 == "SALAD") {
      side1Price = sides.salad.cost;
    }
    else if(side1 == "CHIPS") {
      side1Price = sides.chips.cost;
    }
  
    if(side2 == "FRIES") {
      side2Price = sides.fries.cost;
    }
    else if(side2 == "SALAD") {
      side2Price = sides.salad.cost;
    }
    else if(side2 == "CHIPS") {
      side2Price = sides.chips.cost;
    }
    total = parseFloat(entreePrice + side1Price + side2Price).toFixed(2);
    alert(`Your Total is $${total}. Thanks for coming in and have a great day!`)
  }
  
  dinner = () =>{
    welcome();
    order();
    checkout();
  }
  
  dinner();
  
  console.log(`This customer ordered the ${entree}, the ${side1}, and the ${side2}`);