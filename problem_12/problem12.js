// Problem 12. Highly divisible triangular number

function findHighlyDivisibleTriangularNumber(num)
{
// tempNumber: 76576500
// maxNumberOfFactors: 576

	var i = 1;
	var maxNumberOfFactors = 0;
	var tempNumber = 0;
	var tempNumberOfFactors = 0;
	
	while(true)
	{
		if(maxNumberOfFactors >= num)
		{
			console.log("tempNumber: " + tempNumber);
			console.log("maxNumberOfFactors: " + maxNumberOfFactors);
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
}

function findTriangleNumber(num)
{
	var sum = 0;
	for(var i=0; i<=num;i++)
	{
		sum += i;
	}
	return sum;
}

function findNumberOfFactors(num)
{
	var numberOfFactors = 1;
	for(var i=0; i<num; i++)
	{
		if(num%i == 0)
		{
			numberOfFactors++;
		}
	}
	return numberOfFactors;
}

findHighlyDivisibleTriangularNumber(76576500);