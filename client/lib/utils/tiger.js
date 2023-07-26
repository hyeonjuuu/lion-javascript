// const tiger = async (url) => {
//   const response = await fetch(url);
//   console.log(response);

//   if (response.ok) {
//     const data = response.json();
//   }
// };

// tiger('https://pokeapi.co/api/v2/pokemon/30');
//--------------------------------------------------------------

/* const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const tiger = async (url, options) => {
  
  const response = await fetch(url, options);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};
const response = await tiger({
  URL,
  method: 'POST',
});
const userData = response.data;
console.log(userData); */

//----------------------------------------------------------------------
// console.log(await tiger('https://jsonplaceholder.typicode.com/users'));

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/30');

// console.log(response);

// if (response.ok) {
//   const data = await response.json();
//   console.log(data);
// }

/* ------------------------------------------------------------------- */
const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

/* const tiger = async (options) => {
  // 덮어씌워서 새로운 객체를 만듦.

  // url을 뺀 나머지 객체들을 restOptions로 받음.
  // restOptions = url이 빠진 나머지 객체
  const { url, ...restOptions } = {
    ...defaultOptions, //원래 가지고 있던 기본 값
    ...options, //호출을 통해 전달된 값
    headers: {
      // ---여기까지는 얕은 복사만 됨.
      ...defaultOptions.headers,
      ...options.headers,
    },
    // defaultOptions.headers 값과 options.headers을 덮어씌워 새로운 headers 객체를 만든다.
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
}; */

// const response = await tiger({
//   url: URL,
// });

// const userData = response.data;

// console.log(userData);

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(url, restOptions);
  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
