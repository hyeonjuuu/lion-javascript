/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* -------------------------------------------------------------------------- */
/*                                동물게임                                     */
/* -------------------------------------------------------------------------- */
// ^동물의 기본적인 능력 부여

const animal = {
  legs: 4,
  tail: true,
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
  getEat() {
    return this.stomach;
  },
};

// // * getter, setter
// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],

//   set eat(food) {
//     // eat메서드에 food를 넣으면 this.stomach에 전달받은 food를 추가한다.
//     this.stomach.push(food);
//   },
//   get eat() {
//     return this.stomach;
//   },
// };

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
};

const fox = {
  prey: '',
};

// // ^ fox는 자신의 값에 의해 재정의 되었기 때문에 tiger의 hunt를 사용할 수 없다!
// fox.__proto__ = animal;
// // * animal의 기본 능력을 tiger에게 상속시킴
// tiger.__proto__ = animal;
/* -------------------------------------------------------------------------- */
/*                                      /                                     */
/* -------------------------------------------------------------------------- */

// 함수는 두가지 일을 할 수 있다.
// 1. 일반함수
// 2. 생성자 함수

function Button(name) {}
const a = Button();

const b = Button(); //일반 함수

// 생성자 함수를 실행하면 객체를 만들어냄.
// 객체를 내보내는 함수.
// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수다? 알지?
// const b = new Button(); //생성자 함수

/* -------------------------------------------------------------------------- */
/*                               객체를 만들 수 있는 방법                               */
/* new Object()
생성자 함수
{}
일반 함수 */
/* -------------------------------------------------------------------------- */

// function User (name,age,email) {
//   this.name = name;
//   this.age = age;
//   this.email = email
// }

// function button(){

// }

// // const a = button()

// const person1 = new User('선범',32,'tiger@naver.com');

/* -------------------------------------------------------------------------- */
/*                                 ##생성자 함수                                 */
/* -------------------------------------------------------------------------- */
// // ^ 새로운 객체를 만드는 공장의 역할
// function Animal() {
//   this.stomach = [];
//   this.legs = 4;
//   (this.tail = true),
//     (this.eat = function (food) {
//       this.stomach.push(food);
//     });
//   this.printEat = function (food) {
//     return this.stomach;
//   };
// }

// const tiger = new Animal();

// tiger.pattern = '호랑이 무늬';

// tiger.hunt = function (target) {
//   (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
// };

// const cat = new Animal();

// cat.say = () => '냐아아아옹';

// const fox = new Animal();
// const wolf = new Animal();
// const dog = new Animal();
