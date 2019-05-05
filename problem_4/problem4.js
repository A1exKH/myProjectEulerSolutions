// Problem 4. Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


function findLargestPalindromeProduct()
{
	// time: 0.598 seconds.
	
	var d0 = new Date();
	var largestPalindrome = 0;
	for(var i = 1000; i > 99; i--)
	{
		for(var x = 1000; x > 99; x--)
		{
			var product = i * x;
			
			if(isPalindromicNumber(product))
			{
				if(largestPalindrome < product)
				{	
					largestPalindrome = product;
				}
			}
			
		}
	}
	console.log("Answer: " + largestPalindrome);
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

function reverse(str)
{
    return str.split("").reverse().join("");
}

function isPalindromicNumber(num)
{
	num_str = num.toString();
	reversed_num_str = reverse(num_str);
	if(num_str == reversed_num_str)
	{
		return true;
	}
	return false;
}

findLargestPalindromeProduct();
