// Problem 2. Even Fibonacci numbers
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function findSumOfEvenFibonacci()
{
	// time: 0.001 seconds.
	
	var d0 = new Date();
	var sumOfEven = 0;
	var fibonacciArray = [1, 2, 3];
	var newElem = 0;
	var elemNumber = 3;
	
	while (newElem < 4000000)
	{

		newElem = fibonacciArray[elemNumber - 1] + fibonacciArray[elemNumber - 2];
		if (newElem < 4000000)
		{
			fibonacciArray.push(newElem);
			elemNumber++;
		}	
	} 
	
	for (var i = 0; i < fibonacciArray.length; i++)
	{
		if (fibonacciArray[i] % 2 == 0)
		{
			sumOfEven += fibonacciArray[i];
		}
	}
	
	console.log("Answer: " + sumOfEven);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

findSumOfEvenFibonacci();