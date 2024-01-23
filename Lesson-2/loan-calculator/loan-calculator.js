const rlSync = require('readline-sync');

let loanAmount;
let annualPercentageRate;
let loanDurationYears;
let loanDurationMonths

let checkEmpty = (userinfo) => userinfo ? userinfo : ' - ';

function logUserInfo() {
  console.clear();
  console.log(`Loan amount ============> $${checkEmpty(loanAmount)}`);
  console.log(`Annual percentage rate =>  ${checkEmpty(annualPercentageRate)}% `);
  console.log(`Loan duration ==========>  ${checkEmpty(loanDurationYears)} years, ${checkEmpty(loanDurationMonths)} months `);
}

function numberValidation(number, isInteger) {
  if (!number) return true;
  if ((isInteger === true) && !(Number.isInteger(Number(number))) ) return true;
  if (number < 0) return true;
  if (Object.is(Number(number), NaN)) return true
}

let invalidInputMessage = (input, integer) => {
  if ((input) && numberValidation(input, integer)) console.log('\nINVALID INPUT');
}


do {
  logUserInfo();
  invalidInputMessage(loanAmount, true);
  loanAmount = rlSync.question('\nWhat is your loan amount?   ');
} while(numberValidation(loanAmount, true));
loanAmount = Number(loanAmount);

do {
  logUserInfo();
  annualPercentageRate = rlSync.question('APR?\n')
} while (numberValidation(annualPercentageRate))
annualPercentageRate = Number(annualPercentageRate);

do {
  logUserInfo();
  loanDurationYears = rlSync.question('Loan Duration years?');
} while (numberValidation(loanDurationYears, true));
loanDurationYears = Number(loanDurationYears)

do {
  logUserInfo();
  loanDurationMonths = rlSync.question('Loan Duration months?');
} while (numberValidation(loanDurationMonths, true))
loanDurationMonths = Number(loanDurationMonths);

logUserInfo();

let fullLoanDurationInMonths = (loanDurationYears * 12) + loanDurationMonths
let monthlyInterstRate = (annualPercentageRate/12)/100

let monthlyPayment =  loanAmount * (monthlyInterstRate/ (1 - (Math.pow((1 + monthlyInterstRate), (- fullLoanDurationInMonths)))))

logUserInfo();
console.log('Your monthly payment is $' + monthlyPayment.toFixed(2));
