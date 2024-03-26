const ID = 'kim';
const PASSWORD = '123asd!'


function onSignInButtonClickHandler(event){
    const id=document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (id === ID && password === PASSWORD){
        alert('로그인성공');
    }else {
        const signInMessageElement = document.getElementById('sign-in-message');
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        
    }
}

function onSignUpLinkClickhandler(event){
    window.location.href = "https://google.com";

}

const onSignUpLinkElement = document.getElementById('sign-up-link');
onSignUpLinkElement.addEventListener('click',onSignUpLinkClickhandler);


//kakao 
function onKakaoButtonClickHandler(){
    window.location.href = 'http://developers.kaka.com';
}


// naver
function onnaverButtonClickHandler(){
    window.location.href = 'http://developers.naver.com';
}

const KakaoButtonClickElement = document.getElementById('kakaoLink');
KakaoButtonClickElement.addEventListener('click', onKakaoButtonClickHandler);
const naverButtonClickElement = document.getElementById('naverLink');



