// Problem 18. Maximum path sum I
// Find the maximum total from top to bottom of the triangle below:

function findMaximumPathSum()
{	
	// time: 0.001 seconds.
	
	var d0 = new Date();

	var testData = '75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'.split(" ");

	var counter = 0;
	var testArr = [];
	var numberOfRows = 15;

	for (var x = 0; x < numberOfRows; x++)
	{	
		var tempArray = [];
		for (var y = 0; y <= counter; y++)
		{
			tempArray.push(Number(testData.shift()));
			
		}
		testArr.push(tempArray);
		counter++;
	}
	
	for (var x = testArr.length - 1; x > 0; x--)
	{
		for(var y = 0; y < testArr[x].length; y++)
		{
			var sum1 = testArr[x - 1][y] + testArr[x][y];
			var sum2 = testArr[x - 1][y] + testArr[x][y + 1];

			if (sum1 < sum2)
			{
				testArr[x - 1][y] = sum2;
			}
			else
			{
				testArr[x - 1][y] = sum1;
			}
		}
		testArr.pop();
	}
	console.log("Answer: " + testArr[0][0]);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime()) / 1000 + " seconds.");
}

findMaximumPathSum();
