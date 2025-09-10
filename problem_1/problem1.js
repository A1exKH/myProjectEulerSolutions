// Problem 1. Multiples of 3 and 5
// Find the sum of all the multiples of 3 or 5 below 1000.

function findSumOfMultiples()
{
	// time: 0.001 seconds.
	
	var d0 = new Date();
	var sum = 0;
	
	for (var i = 0; i < 1000; i++)
	{
		if (i % 3 == 0 || i % 5 == 0)
		{
			sum += i;
		}
	}
	console.log("Answer: " + sum);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

findSumOfMultiples();