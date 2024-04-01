/*
    클래스 정의 : class 키워드를 사용하여 선언 
    - constructor를 이용해서 멤버 변수를 선언 및 초기화를 할 수 있음
    - 생성자에서 this를 이용해서 멤버 변수를 지정
    - new 연산자를 통해서 인스턴스를 생성 할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class King {
// 생성자 만들기
//     constructor () {
//         this.name = '이성계';
//         this.tombName = '태조';
//         this.birth = '1335-11-04';
//         this.death = '1408-06-27';
//     }

// }
// const taejo = new King();
// console.log(taejo);


console.log('==================================================');

/*
    constructor: 
    - 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 용도로 사용되는 특수한 메서드 ( 생성자 )
    - 생성자안에서 this 키워드를 이용해서 클래스의 멤버변수를 선언하고 초기화 할 수 있음
    - 생성자의 매개변수로 각 속성의 값을 받아서 초기화 
    - 자바스크립트의 생성자는 오버로드가 되지 않음  (클래스의 이름은 같고 매개변수가 다른 경우)
*/

class king {
    // constructor(){} < 주석한 이유 : 오버로드는 사용할 수 없기에 주석함.
    constructor(name, tombName, birth, death) {
        this.name = name;
        this.tombName = tombName;
        this.birth = birth;
        this.death = death;
    }

}

// 값을 바로 입력할 수 있음.
const junjong = new king('이방과', '정종', '1357-07-26', '1419-10-24');
console.log(junjong);

console.log('==================================================');

/* public , protected(자기자신 , 상속한 클래스에서만 접근) , default(자기클래스 내부에서만)  , privite(접근을 선언한 클래스 내에서만 허용)
    클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
    - 퍼블릭 필드
    - 프라이빗 필드 
    - 정적(static) 퍼블릭 필드
    - 정적(static) 프라이빗 필드
*/

class Sample {
    // 퍼블릭 필드
    publicField;
    // 프라이빗 필드
    #privateField;
    // 정적 퍼블릭 필드
    static staticPublicField = '정적 퍼블릭 필드';
    // 정적 프라이빗 필드
    static #staticPrivateField = '정적 프라이빗 필드';

    constructor(publicField, privateField) {
        this.publicField = publicField;
        // 프라이빗 필드는 #을 붙이지 않으면 새로운 클래스가 생성됨
        this.#privateField = privateField;
        // 스태틱은 아래에서 사용할 수 없기에 위에서 값을 사용해야 함
        // this.staticPublicField = this.staticPublicField;
        // this.#staticPrivateField = privateField;
    }
}

const sampleInstance = new Sample('퍼블릭 필드', '프라이빗 필드');

console.log(sampleInstance);
// console.log(sampleInstance.#privateField);
// 자바 스크립트는 클래스로 접근해줘야함
console.log(Sample.staticPublicField);

console.log('==================================================');

/*  추상화 , 상속 , 다형성 , 캡슐화
    getter, setter : 
    - getter : 프라이빗 멤버 변수의 값을 얻을 수 있는 캡슐화 메서드
    - setter : 프라이빗 멤버 변수의 값을 할당 할 수 있는 캡슐화 메서드
*/
class Sample2 {
    #privateField;
    
    constructor (privateField){
        this.#privateField = privateField;
    }

    get privateField(){
        return this.#privateField;
    }

    set privateField(privateField){
        this.#privateField = privateField;
    }
}

const sample2Instance = new Sample2('프라이빗 필드');
console.log(sample2Instance.privateField);
sample2Instance.privateField='변경 프라이빗 필드';
console.log(sample2Instance.privateField);

console.log('==================================================');

/*
    인스턴스 메서드와 정적 메서드 : 
    - 클래스 내부에 function 키워드를 제거한 함수를 작성하여 인스턴스 메서드를 선언 가능
    - static 키워드를 추가하여 정적 메서드 선언 가능
*/

// 생성자를 만들지 않아도 Sample3의 기본 생성자가 만들어짐 
class Sample3{
    instanceMethod(){
        console.log('인스턴스 메서드');
    }

    static staticMethod(){
        console.log('정적 메서드');
    }
}

// 인스턴스 생성후 호출
const Sample3Instance = new Sample3();
Sample3Instance.instanceMethod();
// static으로 지정된 메서드는 클래스를 통해서 직접 호출해야 함
Sample3.staticMethod();

console.log('==================================================');

/*
    클래스 상속 : 
    - extends 키워드를 사용하여 클래스 상속 가능
    - 메서드 오버라이딩 가능
    - super 키워드로 부모 클래스를 참조할 수 있음
*/

class ParentClass {
    parentField; // 부모 필드 생성

    constructor (parentField){
        this.parentField = parentField;
    }

    parentField(){
        console.log('부모 메서드');
    }
}

class Child1Class extends ParentClass {
    // 필드 넣기
    child1Field;

    // 생성자 만들기
    constructor(){
        super('부모 필드');
        this.child1Field = '자식 1 필드';
    }
    child1Method(){
        console.log('자식 1 메서드');
    }
}

class child2Class extends ParentClass {
    child2Field;

    constructor(){
        super('부모 필드');
        this.child2Field = '자식 2 필드';
    }

    parentMethod(){
        console.log('자식 2 메서드');
    }
}

// 상속 , 다형성 (parentMethod) , 캡슐화  쓰였음

const child1Instance = new Child1Class();
console.log(child1Instance.parentField);
console.log(child1Instance.child1Field);
child1Instance.parentMethod();
child1Instance.child1Method();

const child2Instance = new child2Class();
console.log(child2Instance.parentField);
console.log(child2Instance.child2Field);
child2Instance.parentMethod();

