function getShippingCost(country) {
    let price;
    let message = `Shipping to ${country} will cost ${price} credits`;
    switch (country) { 
        case 'China':
          price = 100;
          return message;
          break;
    
        case 'Chile':
           price = 250;
           return message;
           break;
    
        case 'Australia':
          price = 170;
          return ;
          break;

        case 'Jamaica':
          price = 120;
          return ;
          break;  
       
       default: 
          return "Invalid subscription type!";
      }
    }
    
