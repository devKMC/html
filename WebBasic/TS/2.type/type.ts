/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/

// 클론 뒤에 타입 지정
let variable: string = '문자열';
// variable = 10;   타입 지정을 String으로 지정하여 사용할 수 없음
// variable = true;

// arg 라는 매개변수의 타입을 지정 (타입이 동일해야 함)
function func(arg: number): string {
    return arg + '';
}

const arrowFunction = (arg: number): string => {
    return arg + '';
}

/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null 값
    - undefined: 정의되지 않음
    - object: 참조 타입
    - array: 배열 타입
    - enum: 열거형 타입
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
const numbers: number[] = [1, 2, 3, 4, 5] // 더 많이 사용하는 표현
const numbers2: Array<number> = [1, 2, 3, 4, 5]; // array 라는 클래스를 사용하기


enum Color {
    RED, GREEN, BLUE
}
const color: Color = Color.RED;

// any = object랑 같은 표현
let anyV: any = 10;
anyV = '10';

const aFun = (): void => {

}

/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 할당되는 순간에 할당된 값에 따라 변수의 타입이 결정나는 것 
*/

let stringValuable = '문자열';
// stringValuable = 123;

/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일 때 자주 사용)
*/

const PI: any = '3.14';
let piNumber: number = PI as number; // 넘버타입으로 지정
piNumber = Number(PI);

/*
    유니온 타입
    - 복수 타입을 지정하는 방법 | (ex: number 타입과 null 타입을 동시에 지정)
*/

let union: number | null | string;
union = 10;
union = null;
union = 'null';

/*
    리터럴 타입
    - 지정한 리터럴 값만 가질 수 있는 타입 
*/

let gender: '남' | '여';
gender = '남'
gender = '여'
// gender = '남자'

