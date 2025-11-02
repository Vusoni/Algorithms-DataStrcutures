function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1 // Base Case

  let result = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = result // Store data in memo
  return result
}

// TIP: After fib(200) YOU WILL LOSE ACCURACY - It will be calculate very quickly but since Fibonacci Sequence grows quickly and JavaScript don't store that big integers.