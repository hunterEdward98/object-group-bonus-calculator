const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
debugger;
console.log(employees);
function bonusCalculator(employee) {
  let objOut = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  };

  let bonus = 0;
  if (employee.reviewRating === 5) {
    console.log("nice job, 10%");
    bonus = 0.1;
  }
  if (employee.reviewRating === 4) {
    console.log("good job, 6%");
    bonus = 0.06;
  }
  if (employee.reviewRating === 3) {
    console.log("ok job, 3%");
    bonus = 0.04;
  }
  if (employee.employeeNumber.length === 4) {
    console.log("you've been here a while. 5%");
    bonus += 0.05;
  }
  if (employee.annualSalary > "65000") {
    console.log("you make quite a bit. -1%");
    bonus -= 0.01;
  }
  if (bonus > 0.13) {
    console.log(`You can't get a bigger bonus than 13%!`);
    bonus = 0.13;
  }
  if (bonus < 0) {
    console.log(`You can't get a smaller bonus than 0%!`);
    bonus = 0;
  }
  objOut.bonusPercentage = bonus;
  objOut.totalCompensation =
    employee.annualSalary * (1 + objOut.bonusPercentage);
  objOut.totalBonus = employee.annualSalary * objOut.bonusPercentage;
  // set your object properties
  return objOut;
}
console.log(bonusCalculator(employees[0]));
