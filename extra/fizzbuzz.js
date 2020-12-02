let msg = "";
for (var i = 1; i <= 100; i++, msg = "") {
  if (!(i % 3)) msg += "Fizz";
  if (!(i % 5)) msg += "Buzz";
  console.log(msg || i)
}