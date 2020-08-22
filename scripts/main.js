let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/barbara.jpg') {
      myImage.setAttribute('src','images/brazil-flag.jpg');
    } else {
      myImage.setAttribute('src','images/barbara.jpg');
    }
}




