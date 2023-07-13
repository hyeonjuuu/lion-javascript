/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

Animal => tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    this.name = name;
  }
  set eat(food) {
    this.stomach.push(food);
  }
  get eat(food) {
    this.stomach.push(food);
  }
}

// const tiger = new Animal();

// class Tiger extends Animal{

//   prey = '';

//   constructor(name,pattern){
//     super(name)
//     this.pattern = pattern;
//   }

//   hunt(target){
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   }

//   attack(){
//     return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
//   }

// }

// const beom = new Tiger('범', '호랑이무늬')

class Tiger extends Animal {
  #prey = '';

  constructor(name, pattern) {
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.#prey}가 죽었습니다.`;
  }

  static sleep(name) {
    console.log(name + '이 잠을잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬');

const hoho = new Tiger('hoho', '호피무늬');

// const tiger = new Animal('호돌이');
