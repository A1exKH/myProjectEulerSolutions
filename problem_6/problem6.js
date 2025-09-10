// Problem 6. Sum square difference
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function findSumSquareDifference(num)
{
	// time: 0.001 seconds.
	
	var d0 = new Date();
	var sumOfSquares = 0;
	var squareOfSum = 0;
	var sum = 0;
	
	for (var i = 1; i <= num; i++)
	{
		sum += i;
		sumOfSquares += Math.pow(i, 2);
	}
	squareOfSum = Math.pow(sum, 2);

	console.log("Answer: " + (squareOfSum - sumOfSquares));
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

findSumSquareDifference(100);