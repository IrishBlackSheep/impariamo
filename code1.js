/** DO: 
repeat the code (so the code inside the curly braket) 
as many times as needed.
UNTIL the condition in the control block is STILL true
*/

//start to count from 0
fahrenheit = -25;
do{
	//each time increment by 1
	fahrenheit = fahrenheit+1;
	//subtract 32 from f, and than divide by 9 and multiply by 5.
	c = ((fahrenheit - 32)/9*5).toFixed(2);
	console.log(`F°:${fahrenheit} - C°${c}`);
	//if the condition INSIDE the braket is true, execute what is inside the CURLY {} 
	
	//until C is less than 50
}while(c < 50);

*****************************
//Nancy you have write a program to convert from Stone to KG...

/**
starting from a negative value is useless, as the conversion is linear, negative and positive
will have the same value (excep the sign) so there is no point in computing them

the 0 too is useless as we will have 0Kg as the conversion is just a multiplication


*/

//How much gap between the interval we want our simulation to operate
step = 0.2
//This is the starting point from where we want to begin to compute the conversion table
stone = step;
do{
	
	K = ( stone * 6.35029).toFixed(2);
	//Due to how badly JS handle formatting, we need this step
	s = stone.toFixed(1)
	//I want to LOG insite the CONSOLE (console is the generic term for a text interactive area)
	//I want to log a string of TEXT that contains the value of the variable stone and the variable S... ?
	console.log (`S:${s} - K ${K}`);
	stone = stone + step;
}while (K < 120);
