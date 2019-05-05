// Problem 7. 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function findPrime(num)
{
	// time: 2.879 seconds.
	
	var d0 = new Date();
	var primeArray = [];
	var i = 2;

	while(true)
	{
		if(isPrime(i))
		{
			primeArray.push(i);
		}
		if(primeArray.length == num)
		{
			break;
		}
		i++;
	}
	
	console.log("Answer: " + primeArray[primeArray.length - 1]);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

function isPrime(num)
{
	var factorsCounter = 0;
	for(var i = 1; i < num; i++)
	{
		if(num % i == 0)
		{
			factorsCounter++;
			if(factorsCounter > 1)
			{
				return false;
				break;
			}
		}
	}

	return true;
}

findPrime(10001);