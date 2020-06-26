/*

I want you to write a program that prints all 
the palindromes of given arry of single digit number
input: [1, 2, 3]
output:
1, 2, 3
1, 3, 2
2, 1, 3
2, 3, 1
3, 1, 2
3, 2, 1

*/


var permute = function(nums=[1,2,3],set=[],answers=[]){
    if(!nums.length) answers.push([...set])
    for(let i = 0; i < nums.length ; i++){
      const newnums = nums.filter((n,index) => index != i)
      set.push(nums[i])
      permute(newnums,set,answers);
      set.pop();
    }
  
    return answers;
  }
  
  console.log(permute());