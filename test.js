let num = 50;
function even(nums) {
  const arr = [];
  for (let i = 1; i <= nums; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
even(num);
