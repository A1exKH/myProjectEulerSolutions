// Problem 21. Amicable numbers
// Evaluate the sum of all the amicable numbers under 10000.

function findProperDivisorsSum(num)
{
	var proterDivArray = [];
	var sum = 0;
	
	for(var i=1; i<num; i++)
	{
		if(num%i == 0)
		{
			proterDivArray.push(i);
			sum += i;
		}
	}
	return sum;
}

function findSumOfAmicableNumbers(num)
{
	// time: 0.501 seconds.
	
	var d0 = new Date();
	var amicableNumbersArray = [];
	var b = 0;
	var sum = 0;
	
	for(var a=1; a<num; a++)
	{
		b = findProperDivisorsSum(a);
		if(findProperDivisorsSum(b) == a && a !=b)
		{
			if(!amicableNumbersArray.includes(a))
			{
				amicableNumbersArray.push(a);
				sum += a;
			}
			if(!amicableNumbersArray.includes(b))
			{
				amicableNumbersArray.push(b);
				sum += b;
			}
		}
	}
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
	console.log("Answer: " + sum);
}
findSumOfAmicableNumbers(10000);