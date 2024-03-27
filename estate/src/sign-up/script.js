const ID = 'kim';
const PASSWORD = '123asd!';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';



const idInputElement = document.getElementById('id');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const onSignInLinkElement = document.getElementById('sign-in-link')

// 아이디 중복 확인
function onIdInputHandler (event) {
    const value = event.target.value;

    if (value) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

// 이메일 인증 확인
function onEmailInputHandler (event) {
    const value = event.target.value;
    if(value) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

// 인증 확인
function onAuthnumberInputHandler (event) {
    const value = event.target.value;
    if(value) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

idInputElement.addEventListener('input', onIdInputHandler);
emailInputElement.addEventListener('input', onEmailInputHandler);
authNumberInputElement.addEventListener('input', onAuthnumberInputHandler);

function onCheckDuplicateClickHandler (event) {
    const idValue = idInputElement.value;
    if(!idValue) return;

    const isDuplicate = idValue === ID;

    if(isDuplicate){
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
    }else{
        idMessageElement.className = 'input-message primary';
        idMessageElement.textContent = '사용 가능한 아이디 입니다.';
    }
}

// 이메일 형식에 대한 확인 작업
function onCheckEmailClickHandler (event) {
    const emailValue = emailInputElement.value;
    if (!emailValue) return;

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/; // (자바의 경우 중간에 역슬래시가 하나 더 들어가게됨)
    const isEmail = emailReg.test(emailValue); // 공백은 클릭 안되게끔 함
    if(!isEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }

    const isDuplicateEmail = emailValue === EMAIL;
    if(isDuplicateEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.';
}

// 이메일 인증에 대한 확인 작업
function onCheckAuthNumberClickHandler (event){
    const authNumberValue = authNumberInputElement.value;
    if (!authNumberValue) return;

    const isEqualAuthNumber = authNumberValue === AUTH_NUMBER;
    if (!isEqualAuthNumber){
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다';
        return;
    }
    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다';
}


// 로그인에 대한 작업
function onSignInLinkClickhandler(event){
    window.location.href = "../sign-in";
}

onSignInLinkElement.addEventListener('click',onSignInLinkClickhandler);


checkDuplicateButtonElement.addEventListener('click', onCheckDuplicateClickHandler);

checkEmailButtonElement.addEventListener('click', onCheckEmailClickHandler);

checkAuthNumberButtonElement.addEventListener ('click', onCheckAuthNumberClickHandler);