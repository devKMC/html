/*
    인터페이스 : 
    - 객체 및 클래스의 타입으로 사용됨
    - 인터페이스에 선언된 속성 또는 메서드의 구현을 강제
    - interface 키워드로 선언
*/

/*
    변수(객체)의 타입으로써 인터페이스
*/
interface King {
    name: string;
    tombName: string;
    birth: string;
    death: string;
}

// 타입을 인터페이스로 지정
const taejo: King = {
    name: '이성계',
    tombName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
}

console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스
*/
// 클래스 앞에 I를 붙임으로써 클래스타입의 인터페이스를 생성 할 수 있음
// add 함수 선언 되어있고 매개변수로 넘버타입 2개를 받아 넘버 타입을 반환함
interface IMath {
    add: (a:number, b:number) => number;  // 함수의 타입 지정
}

class CMath implements IMath{
    add = (a: number, b: number):number => {
        return a+ b;
    }
}

console.log('==================================================');

/*
    선택적 속성 :
    - ? 키워드로 인터페이스의 속성을 선택적으로 구현하도록 지정할 수 있음
*/

interface Person{
    name: string;
    birth: string;
    address?: string; // 선택적으로 할당하려고 할때 
}

const person: Person = {
    name: '홍길동',
    birth: '2024-04-02'
}

console.log('==================================================');