// Problem 14. Longest Collatz sequence
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

function findLongestCollatzSequence()
{
	// time: 3.626 seconds.
	
    var d0 = new Date();
    var maxCounter = 0;
    var maxCounterNumber = 0;
    var tempCounter = 0;

    for (var i = 1000000; i > 1; i--)
    {
        tempCounter = findNumberOfElements(i);
        if (maxCounter < tempCounter)
        {
            maxCounter = tempCounter;
            maxCounterNumber = i;
        }
    }
    var d1 = new Date();
    console.log("Answer: " + maxCounterNumber);
    console.log("time: " + (d1.getTime() - d0.getTime()) / 1000 + " seconds.");
}

function findNumberOfElements(num)
{
    var result = num;
    var counter = 0;

    while (result !== 1)
    {
        if (result % 2 == 0)
        {
            result = result / 2; // (n is even)
            counter++;
        }
        else
        {
            result = 3 * result + 1; // (n is odd)
            counter++;
        }
    }
    return counter++;
}

findLongestCollatzSequence();
