/*
    제너릭 : 
    - 선언 시점이 아니라 컴파일 시점에 타입을 명시하여 하나의 타입이 아닌 여러 타입을 사용할 수 있도록 하는 기법
    - 코드 안정성과 재사용성을 높일 수 있음
*/

//======================================================

interface Person1 { // <> 를 사용하여 매개타입을 받아오는 작업
    name: string;
    data: any; // any로 사용할 시 모든 데이터 타입을 전부 가질 수 있음
}

const person1: Person1 = {
    name: '홍길동',
    data: '김철수'
}

person1.data; // 타입이 any

//=====================================================

interface Person<T> { // <> 를 사용하여 매개타입을 받아오는 작업
    name: string;
    data: T; // any로 사용할 시 모든 데이터 타입을 전부 가질 수 있음
}

const person: Person<string> = {
    name: '홍길동',
    data: '김철수'
}

person.data; // 타입이 string

//======================================================

// T를 제너릭으로 사용한다는 것을 매개변수 앞에 작성해줘야함 (제너릭은 여러타입을 받는거기 때문에 타입 자동 설정)
const func = <T>(name: string, data: T) => {
    const result: Person<T> = { name, data };
    return result;
}

const person2 = func('김철수','홍길동');
const person3 = func('이영희',20);

person3.name
person3.data


console.log('==================================================');