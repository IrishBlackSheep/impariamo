// single line comment

/*
 * this is a multiline comment
 * it can span multiple lines
 * it is used to explain sometime what the code does
 * most importantly WHY!
 */

/**
 * this is a documentation comment, this is purely for cosmetic purpose mostly
 */

//this function will convert kg in stones
double kgToStones(double kg) {
	//the return keyword will TERMINATE the execution of the function, and return the value on that line
	return kg * 0.157473;
}

/**
this is a generic function definition
first elememnt is the return type, so what kind of data is returned as result of the execution of the function
int means an integer (a natural number like 1 2 3 4... -4 )
double means a floating point number (a number with decimal point)
void means nothing, so the function does not return anything

second element is the name of the function, you know to call things (the only special function is main, that is called
automatically when the program starts)

now parentesis, inside you will 0 or more parameter, those are the arguments passed to the function, to make it work

than the { start the scope or body of the function, which end on the corresponding }
*/
int main() {

	//this is a variable, so you apply a label to a piece of memory, like a box or a jar
	//depending on the type (first parameter) you can from now on only put in this jar 1 element of this type
	//like a single slot cookie jar, certain types allow more element inside, and are called cointainer
	double celsius = 0;
	double fah;

	//means I want to repeat what is inside the 2 curly braces, until the condition in the () is true
	while (celsius < 100) {
		celsius = celsius + 0.1;
		fah     = celsius * 9 / 5 + 32;
	}
}
