const numbers = [1,2,4,55,65,44,64,78];
// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);

const rev_num = [];
for(const num of numbers){
    // console.log(num);
     rev_num.unshift(num);
}
// console.log(rev_num)

let reverse_num = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reverse_num.unshift(num);
}
// console.log(reverse_num)

// legnth: somosto element er jogfol & count hobe 1->>>1000.
// index: somosto element guloke 0->>>1000 count kora hy.
// index diye reverse korbo.

let rev_numb = [];
for(let i = numbers.length - 1; i >= 0; i--){// numbers er length 7, (index 6, 0 to 6)
    const numb = numbers[i];
    console.log(numb); //can be possible and more we can do is: let rev_numb = [] and
    rev_numb.push(numb);

} 
console.log(rev_numb)
