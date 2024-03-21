/*
    객체 : 키 (key)와 값 (value로 구성된 속성들의 집합)
    -  메서드를 가질 수 있음
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일반적 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
const emptyObject = {};          // 생성값이 없는 객체를 만듬
const hongGildong = {
    name: '홍길동',
    age : '23',
    address : '서울특별시',
    greating : function(){
        console.log(`안녕 난 ${this.name} 이야!`);
    }
}

console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greating() ;        // 인스턴스에서 greating 호출  

const name = '고종';
const age = 40;
const address = '서울특별시';

const goJong = {
    name : name,
    age : age,
    address : address
};

console.log(goJong);
console.log(goJong.age);


console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체 생성 가능
*/
const emptyObjectByConstructor = new Object();
console.log(emptyObjectByConstructor);

console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function Person (name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}

const goGildong = new Person('고길동','30','인천광역시');
console.log(goGildong);

console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 이름 (변수 이름으로 사용가능한 이름) 일 경우에는 따음표를 생략할 수 있음
    - 유효한 이름이 아니면 반드시 따음표를 포함해서 작성
*/
const kimminchul = {
    'first name' : 'minchul',            // 띄어쓰기는 인식 못하기에 따음표는 꼭 작성해야함
    'last name' : 'kim',
    gender : 'male',
    age : 35
}
console.log(kimminchul);


console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 [] 표기법으로 접근 가능
    - . 표기법은 유효한 이름일 때 사용
    - [] 표기법은 유효한 이름이 아닐 때와 접근할 속성이 동적으로 변할 때 ([] 표기법 사용시 반드시 문자열로 지정)
    - 객체에 존재하지 않는 속성에 접근하면 undefined를 반환
*/
console.log(kimminchul.age);
// console.log(kimminchul.first name);
console.log(kimminchul['first name']);
let property = 'first name';
console.log(kimminchul [property]);

console.log('==============================');

/*
    속성 값 변경 :
    - 객체속성에 접근하여 새로운 값을 할당하여 변경 가능 
    - 만약 존재하지 않는 속성에 값을 할당하면 새로운 속성이 생성됨
*/
goJong.name = '이형';
goJong.birth = '1852년 9월 8일'
console.log(goJong)

console.log('==============================');

/*
    속성 삭제 : 
    - delete 연산자를 사용하여 객체 속성 제거 가능
*/
delete goJong.birth;
console.log(goJong);

console.log('==============================');

/*
    for-in 문 : 
    - for - in 문으로 객체에 포함되어 있는 키를 순회해서 접근 가능
    - 반환되는 값은 문자열 타입의 키가 반환
*/
for (const key in goJong){
    console.log(`${key} : ${goJong[key]}`)
}


console.log('==============================');

// 주소를 통해 참조값을 가르킴으로 변경이 됨
let soonJong = goJong;
soonJong.name = '이척';

console.log(soonJong.name);
console.log(goJong.name);

soonJong ={
    name : goJong.name,
    age : goJong.age,
    address : goJong.address
}

soonJong ={};
for (const key in goJong){
    soonJong[key] = goJong[key];
}
console.log(soonJong);

soonJong = {};
console.log(soonJong);

// 고종에 있는 값을 그대로 복사해서 넣어줌  (스레드 연산자)
// name , age , address
soonJong = {...goJong}; // 새로운 주소를 가지는 공간을 생성 (포인트배열 같은 느낌)
console.log(soonJong);

goJong.name = '이형';
console.log(goJong.name);
console.log(soonJong.name);

