//kakao 
function onKakaoButtonClickHandler(event){
    window.location.href = 'http://developers.kakao.com';
}


// naver
function onnaverButtonClickHandler(event){
    window.location.href = 'http://developers.naver.com';
}

const KakaoButtonClickElement = document.getElementById('kakaoLink');
KakaoButtonClickElement.addEventListener('click', onKakaoButtonClickHandler);
const naverButtonClickElement = document.getElementById('naverLink');
naverButtonClickElement.addEventListener('click', onnaverButtonClickHandler);



const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonClickHandler);
const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonClickHandler);