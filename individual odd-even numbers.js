/*write a small web app that does the following:
    - defines an array of numbers (positive, negative and zeros).
    - for each number in the array display the following: "(number) is even||odd"
    - example:
        * array = [1, 10, 3]
        * result should be:
            1 is odd
            10 is even
            3 is odd*/
  //Even odd
 let nums = [13,-84,1000];
  let result = nums.filter((numbers)=>{
       if(numbers%2!==0){
         document.write(`   ${numbers}   is odd  ` );
       } else {
           document.write(`    ${numbers}  is even  `);
      }
  });
          
