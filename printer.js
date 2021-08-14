// <https://programmers.co.kr/learn/courses/30/lessons/42587>
function solution(priorities, location) {
  let p = priorities;
  let my = p[location];

  let cond1Sum = 0;

  let hasGreaterBehindMe = false;
  let cond2Sum = 0;

  let hasGreaterFrontMe = false;
  let cond3Sum = 0;

  for (let i = p.length - 1; i >= 0; i--) {
    cond1Sum += p[i] > my ? 1 : 0;

    if (p[i] === my) {
      if (i > location && !hasGreaterBehindMe) {
        if (p[i] > my) {
          hasGreaterBehindMe = true;
        } else {
          cond2Sum += 1;
        }
      }

      if (i < location && !hasGreaterFrontMe) {
        if (p[i] > my) {
          hasGreaterFrontMe = true;
        } else {
          cond3Sum += 1;
        }
      }
    }
  }

  return cond1Sum + (hasGreaterBehindMe ? cond2Sum : 0) + cond3Sum + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
