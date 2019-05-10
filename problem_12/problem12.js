// Problem 12. Highly divisible triangular number
// What is the value of the first triangle number to have over five hundred divisors?

function findHighlyDivisibleTriangularNumber(num)
{
	// time: 0.001 seconds.
	
	var d0 = new Date();
	var i = 60000000;
	var maxNumberOfFactors = 0;
	var tempNumber = 0;
	var tempNumberOfFactors = 0;
	
	while(true)
	{
		if(maxNumberOfFactors >= num)
		{
			console.log("Answer: " + tempNumber);
			break;
		}
		tempNumber = findTriangleNumber(i);
		tempNumberOfFactors = findNumberOfFactors(tempNumber);
		if(maxNumberOfFactors < tempNumberOfFactors)
		{
			maxNumberOfFactors = tempNumberOfFactors;
		}
		i++;
		
	}
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

function findTriangleNumber(num)
{
	var sum = 0;
	for(var i = 0; i <= num; i++)
	{
		sum += i;
	}
	return sum;
}

function findNumberOfFactors(num)
{
	var numberOfFactors = 1;
	for(var i = 0; i < num; i++)
	{
		if(num % i == 0)
		{
			numberOfFactors++;
		}
	}
	return numberOfFactors;
}

findHighlyDivisibleTriangularNumber(76576500);