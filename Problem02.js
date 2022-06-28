
// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]
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
// Method 1:
// const  getUniquePrducts=(listOfProducts)=>{
//     const d = {};
//     const q = {};
//     listOfProducts.forEach((element) => {
//       if (d[element.productName]) {
//         d[element.productName] += element.quantity;
//       } else {
//         d[element.productName] = element.quantity;
//       }
//       q[element.productName] = element.description;
//     });
//     const r = Object.keys(d).map((key) => {
//       return {
//         productName: key,
//         quantity: d[key],
//         description: q[key],
//       };
//     });
//     console.log(r);
// }
// getUniquePrducts(listOfProducts);



//Method 2:
const  getUniquePrducts=(arr)=>{
 	var result = [];
  arr.reduce(function(res, value) {
  if (!res[value.productName]) {
    res[value.productName] = { productName: value.productName, quantity: 0, description: value.description };
    result.push(res[value.productName])
  }
  res[value.productName].quantity += value.quantity;
  
  return res;
	}, {});

	console.log(result);
}
getUniquePrducts(listOfProducts);
