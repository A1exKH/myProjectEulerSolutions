// Problem 9. Special Pythagorean triplet
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function findSpecialPythagoreanЕriplet()
{

	// time: 1.731 seconds.
	
	var d0 = new Date();
	var PythagoreanTripletArr = [];
	var sum = 0;
	
	
	for(var c=0; c<1000; c++)
	{
		for(var b=0; b<1000; b++)
		{
			for(var a=0; a<1000; a++)
			{
				if(b<c)
				{
					if(a<b)
					{
						sum = (a+b+c);
						if(sum == 1000)
						{
							var flag = (Math.pow(a,2) + Math.pow(b,2)) == Math.pow(c,2);
							if(flag)
							{
								PythagoreanTripletArr.push(a);
								PythagoreanTripletArr.push(b);
								PythagoreanTripletArr.push(c);
								console.log("Answer: " + (a*b*c));
								break;
							}
							
						}
					}
				}
			}
		}
	}

	
	var d1 = new Date();
	console.log("time: " + (d1.getTime() - d0.getTime())/1000 + " seconds.");
}

findSpecialPythagoreanЕriplet();