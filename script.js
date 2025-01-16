// 이미지 숨기는 함수
function hideImage() {
  var image = document.getElementById('menuImage');
  image.style.display = 'none';
}

// 이미지 보이는 함수
function showImage() {
  var image = document.getElementById('menuImage');
  image.style.display = 'block';
}

// 컨텐츠 보여주는 함수
function showContent(id) {
  var contents = document.querySelectorAll('.content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
  hideImage(); // 컨텐츠 나타날 때 이미지 숨기기
}

// 홈으로 이동하는 함수
function goToHome() {
  showImage(); // 이미지 표시
  var contents = document.querySelectorAll('.content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
}
// JavaScript Document
