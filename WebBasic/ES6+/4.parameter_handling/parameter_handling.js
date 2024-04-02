/*
    매개변수 기본값 : 
    - 함수 호출시 인수를 전달하지 않을 때 사용할 기본값을 지정할 수 있음
*/
const add = (a = 10, b = 20) => { return a + b }; // 10 , 20 기본값 지정함
console.log(add);
console.log(add());
console.log(add(30, 90));

console.log('========================================');

/*
    rest 매개변수 : 
    - 매개변수 앞에 ... 을 붙여서 정의한 매개변수
    - 함수에 전달받은 인수의 목록을 배열로 전달 받음
    - rest 매개변수는 반드시 제일 마지막에 선언 되어야 함
*/
const restFunction1 = (...args) => {
    console.log(args);
};

restFunction1(1, 2, 3, 4, 5);

// ...으로 정의한 매개변수는 뒤로 와야한다
const restFunction2 = (arg1, ...args) => {
    console.log(arg1);
    console.log(args);
};

restFunction2(1, 2, 3, 4, 5);

console.log('========================================');

/*
    spread 연산자 :
    - ...을 사용하여 대상을 개별 요소로 분리
    - 반드시 피연산자는 반복 가능한 객체 (배열 , 객체 , 문자열 , 등 ...) 이어야 함
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);
console.log(1, 2, 3, 4, 5);

// 배열 복사에 활용하기
// 새로운 배열을 만들어 새로운 공간에 값을 할당
const copyNumbers = [...numbers];
console.log(copyNumbers);

copyNumbers[0] = 10;
console.log(numbers);
console.log(copyNumbers);

// 배열 연결에 활용하기
const numbers2 = [6, 7, 8, 9, 10];
let newNumbers = [...numbers, ...numbers2];
console.log(newNumbers);
newNumbers = [...numbers2, ...numbers];
console.log(newNumbers);

// 배열 요소 추가에 활용하기
newNumbers = [...numbers, 0, -1, -7];
console.log(newNumbers);

console.log('========================================');

// 객체에서 사용하는 방법 활용하기
// 객체 복사 , 연결, 요소 추가에 사용
const king = {
    name: '이성계',
    tombName: '태조'
};

// 새로운 킹을 만드려고 할 때
let newKing = { ...king };
newKing.name = '이방과';
console.log(newKing);
console.log(king);

// 객체 연결
const kingInfo = {
    address: '서울특별시',
    contury: '고려'
};
newKing = { ...king, ...kingInfo };
console.log(newKing);

// 요소 추가하기
newKing = { ...king, birth: '1335年 11月 4日' };
console.log(newKing)

// 중복된 키를 넣으면 키 위에 덮어짐 ( 가장 많이 사용되는 형태 )
// ※ 수정 작업 
newKing = { ...king, name: '이단', birth: '1335年 11月 4日' };
console.log(newKing)