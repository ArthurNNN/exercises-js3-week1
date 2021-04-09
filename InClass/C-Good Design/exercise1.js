

/*Task. go through all of these issues and make appropriate improvements to the code.

1. Naming: the function has a bad name, myFunction() tells you nothing about
   what the function does. It's also considered bad practice to name variables
   vaguely by separating them through numbers (incomeTax1, incomeTax2, etc). If
   you find yourself doing this then you should either use an array (such as
   incomeTax[]).

2. Commenting: the function isn't documented at all. It's very difficult to
   understand what the function's purpose is and how each part of the code
   contributes to it. By writing comments, the coder communicates their
   reasoning and helps the function be human readable.

3. Layout/formatting: unnecessary spacing between the if and else statement.

4. Single responsibility: the function doesn't have a single purpose. It
   calculates national insurance and salary deductions. Maybe the national
   insurance calculation could be moved to a separate function.

5. Input variable being overwritten: the function requires gross salary (before
   deductions) and net salary (after deductions) the `salary` input variable is
   therefore copied into an `originalSalary` variable so that it can be changed.
   It would be much clearer to create a new `netSalary` variable and leave
   `salary` unmodified.

6. DRY principle: the function validates the DRY (Don't Repeat Yourself) rule.
   The line where a deduction is taken from the salary is repeated 3 times with
   different indices. This can be replaced with a `for` loop.

7. Magic numbers. The code contains a lot of magic numbers, including `17775`,
   `0.09` and `0.1`.

8. Useless parameters: the code contains a variable which isn't used. They
   should be removed because they are confusing. It is tempting when you're
   starting to code a function to add more parameters thinking that you might
   need them, but it's important to remove them if you don't end up using them.
   
   */

// function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
//    var totalIncomeTax = incomeTax1 + incomeTax2;
//    var studentLoan = (salary - 17775) * 0.09;
//    var originalSalary = salary;
//    var nationalInsurance = null;

//    if (taxCode === "1150L") {
//      nationalInsurance = salary * 0.1;
//    } else if (taxCode === "ST") {
//      nationalInsurance = salary * 0.05;
//    } else {
//      nationalInsurance = salary * 0.08;
//    }

//    var deductions = [nationalInsurance, totalIncomeTax, studentLoan];

//    salary = salary - deductions[0];
//    salary = salary - deductions[1];
//    salary = salary - deductions[2];

//    return (
//      "Your gross income is £" +
//      originalSalary.toString() +
//      " and your net income is £" +
//      salary.toString() +
//      "."
//    );
//  }

// console.log(myFunction(28000, "1150L", 1000, 580));


// Set constants
const A = 0.1;
const B = 0.05;
const C = 0.08;
const X = 17775;
const Y = 0.09;
const TC1 = "1150L";
const TC2 = "ST";

// Calculation of national insurance
const nationalInsurance = (salary, taxCode) => {
   if (taxCode === TC1) {
      return salary * A;
   } else if (taxCode === TC2) {
      return salary * B;
   }
   return salary * C;
}

// Calculation of salary deductions
const salaryDeductions = (incomeTax) => {
   var total = 0;
   incomeTax.forEach(tax => total += tax);
   return total;
}

// Calculation of student loan
const studentLoan = (salary) => (salary - X) * Y;

// Calculation of net income and ouput 
const calcAndOutputIncome = (salary, taxCode, incomeTax) => {
   netSalary = salary - nationalInsurance(salary, taxCode) - salaryDeductions(incomeTax) - studentLoan(salary);
   return `Your gross income is $${salary.toString()} and your net income is $${netSalary.toString()}.`;
}

console.log(calcAndOutputIncome(28000, "1150L", [1000, 580]));