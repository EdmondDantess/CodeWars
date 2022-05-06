/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

function isTriangle(a,b,c)
{
 if (a>0 && b>0 && c>0 && a+b>c && a+c>b && c+b>a) {
   return true;
 }
  
   return false;
}

isTriangle( 1, 3, 5);
console.log(isTriangle( 1, 0, 5))  