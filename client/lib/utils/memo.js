import { getNode } from '../index.js';

const cache = {};

export const memo = (key, callback) => {
  if (!callback) return cache[key]; // 콜백이 없을때 해당 key를 가지고 있는 value를 리턴

  cache[key] = callback();

  if (cache[key]) {
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key];
  }

  cache[key] = callback();

  console.log(cache);
};

// 메모 함수를 사용하여 키값 전달, 함수 본문 전달.
memo('cube', () => getNode('#cube')); //setter

console.log(memo('cube')); //getter

// memo('cube'); // div#cube

// 객체를 만들어서 key:value 쌍으로 저장
