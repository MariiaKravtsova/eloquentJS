
for (var number = 1; number <= 100; number++)
  if (number % 3 == 0)
    console.log("Fizz");
  else if (number % 5 == 0)
    console.log("Buzz");
  else if (number % 3 && number & 5 == 0)
    console.log("Fizz Buzz");
  else
    console.log(number);
