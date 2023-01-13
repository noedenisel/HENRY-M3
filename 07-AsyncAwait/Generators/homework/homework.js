function* fizzBuzzGenerator(max = Infinity) {
  // Tu código acá:
  console.log(max);
  // let i = 1
  // while(i <= max){
  //   if(i % 3 === 0 && i % 5 === 0) yield "Fizz Buzz"
  //   else if(i%3 === 0) yield "Fizz"
  //   else if(i%5 === 0) yield "Buzz"
  //   else yield i
  //   i++
  // }


    let current = 1;
    while (current <= max) {
      if (current % 3 === 0 && current % 5 === 0) {
        yield "Fizz Buzz";
      } else if (current % 3 === 0) {
        yield "Fizz";
      } else if (current % 5 === 0) {
        yield "Buzz";
      } else {
        yield current;
      }
      current++;
    }
  }
  
    
  


const generatorObject = fizzBuzzGenerator()
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));
console.log((generatorObject.next()));


module.exports = fizzBuzzGenerator;
