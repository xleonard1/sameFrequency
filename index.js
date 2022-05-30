function sameFrequency(int1,int2){
    let strNum1 = int1.toString()
    let strNum2 = int2.toString()
    if(strNum1.length !== strNum2.length) {return false}
    let  frequencyCounter = {}
  
    for(let num of strNum1) {
         frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
     }
    for(let num of strNum2) {
        if(!frequencyCounter[num]) {
            return false
        } else {
            frequencyCounter[num] -= 1
        }