// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
const getUniqueProductCount=(listOfProducts)=>{
  let map=new Map()
  let sum=0
  for(let i=0;i<listOfProducts.length;i++){
    
      if(map.has(listOfProducts[i].productName)){
          map.set(listOfProducts[i].productName, map.get(listOfProducts[i].productName)+1)
      }
      else{
         map.set(listOfProducts[i].productName,1)
      }
  }
  for (const [key,value] of map) {
      console.log(key,":",value);
  }
}
getUniqueProductCount(listOfProducts)



