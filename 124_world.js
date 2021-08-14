// https://programmers.co.kr/learn/courses/30/lessons/12899

function calc(n) {
  let answer = String(n % 3).replace("0", "4");
  let next = parseInt((n - 1) / 3);
  return next <= 0 ? answer : calc(next) + answer;
}

function solution(n) {
  return calc(n);
}