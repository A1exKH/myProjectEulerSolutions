// Problem 10. Summation of primes
// Find the sum of all the primes below two million.

function findSummationOfPrimes(num)
{	
	// time: 815.252 seconds.
	
	var d0 = new Date();
	var sum = 0;
	for (var i = 2; i < num; i++)
	{
		if (isPrime(i))
		{
			sum += i;
		}
	}
	console.log("Answer: " + sum);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime()) / 1000 + " seconds.");
}

function isPrime(num)
{
	var factorsCounter = 0;
	for (var i = 1; i < num; i++)
	{
		if (num % i == 0)
		{
			factorsCounter++;
			if (factorsCounter > 1)
			{
				return false;
				break;
			}
		}
	}
	return true;
}

findSummationOfPrimes(2000000);