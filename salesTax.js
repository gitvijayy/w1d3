var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}

];

function calculateSalesTax(salesData, taxRates) {

  var revenue = {};

  salesData.forEach(function(company) {


    if (revenue[company.name] === undefined) {
      revenue[company.name] = {};
    }

    var sales = sum(company.sales);
    var taxes = sales * taxRates[company.province];

    if (revenue[company.name]["totalSales"] === undefined) {
      revenue[company.name]["totalSales"] = sales;
      revenue[company.name]["totalTaxes"] = taxes;
    } else {
      revenue[company.name]["totalSales"] += sales;
      revenue[company.name]["totalTaxes"] += taxes;
    }

  });

  return revenue;
}

function sum(array) {

  var finalSum = 0;

  array.forEach(function(value){
    finalSum += value;
  });

  return finalSum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/