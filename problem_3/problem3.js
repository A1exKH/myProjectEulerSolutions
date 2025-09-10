// Problem 3. Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function findLargestPrimeFactor(number)
{
	// time: 6122.424 seconds.
	
	var d0 = new Date();
	factorsArray = [];
	for (var n = number; n > 0; n--)
	{
		if (number % n == 0)
		{
			if (isPrime(n))
			{
				factorsArray.push(n);
			}
			
		}
		if (factorsArray.length == 1)
		{
			break;
		}
	}
	console.log(factorsArray);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

function isPrime(num)
{
	if (num == 0 || num == 1)
	{
		return false;
	}
	
	var factorsCounter = 0;
	for (var i  = 1; i < num; i++)
	{
		if (num % i == 0)
		{
			factorsCounter++;
			if (factorsCounter > 1)
			{
				return false;
			}
		}
	}
	return true;
}

findLargestPrimeFactor(600851475143);
