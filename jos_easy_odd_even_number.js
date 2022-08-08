const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = []
let odd = []
function result(number) {
  let all
  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      even.push(number[1])
    } else {
      odd.push(number[i])
    }
  }
  return (all = [odd, even])
}

console.log(result(number))
