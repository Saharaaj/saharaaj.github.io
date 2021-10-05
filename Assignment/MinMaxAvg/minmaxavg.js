var num=[10,98,9,50]
var rv = minMaxAvg(num);

function minMaxAvg(num){
  
  let min = num[0]
  for (let i = 0; i < num.length; i++){
    if (min > num[i]){
      min = num[i]
    }
  }
  
  let max = num[0]
  for (let i = 0; i < num.length; i++){
    if (max < num[i]){
      max = num[i]
    }
  }
  
  let avg = 0
  for (let i = 0; i < num.length; i++){
    avg += num[i]
  }
  
  avg /= num.length
  return [min,max,avg]
}

let min = rv[0]
let max = rv[1]
let avg = rv[2]

document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
document.getElementById("avg").innerHTML = avg;