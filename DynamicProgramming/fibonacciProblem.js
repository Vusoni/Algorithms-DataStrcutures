/* Problem: Calculate the end number of the fibonacci sequence - Recursive Solution */

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}



// TIP: Don't try fib(100) - It will take a lot of time and maybe crash your VScode