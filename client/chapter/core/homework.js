// Dom에 접근하는 방법
document.querySelector();
const input = document.querySelector('#todo');

console.log(input.value); //input의 값을 가져옴

//콘솔
input.value === 'aaa';

input.classList.add('is-active');
input.classList.remove('is-active');

const value = input.value;

input.addEventListener('input', () => {
  value = input.vlaue;
  console.log(value === 'hello');
});
