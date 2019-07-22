const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const nums = ['M', 'CM', 'D', 'CD','C', 'XC','L','XL','X','IX','V','IV','I']; 

function repeat(n, c){
  let r = ''; 
  for(let i = 0; i < c; i++){
    r += n;
  }
  return r;
}

function toRoman(input){
  if(typeof input  !== 'number') throw new Error(`expected integer, got ${typeof input}`);
  let result = "";
  for(let i = 0; i < ints.length; i++){
    const count = Math.floor(input / ints[i]);
    result += repeat(nums[i], count);
    input -= ints[i] * count;
  }
  return result;
}

function fromRoman(roman){
  if(typeof roman !== 'string') throw new Error(`expected string, got ${typeof roman}`);
  let result = 0;
  while(roman){
    for(let i = 0; i < nums.length; i++){
      let n = nums[i];
      if(roman.slice(n, n.length) === n){
        roman = roman.slice(n.length)
        result += ints[i];
        break;
      } 
    }
  }
  return result;
}

module.exports = {
  toRoman,
  fromRoman
};

if (require.main === module) {
  console.log(fromRoman('II'));
}
