let text = {
    selectMemberTeam: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    selectMaximumFile: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    selectResetPassword: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    selectSubcription: 'Yes! Send us a message and we’ll process your request no questions asked.',
    selectAdditionalSupport: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
}

// style screes width
function styleScreen() {
    let width = document.body.offsetWidth;
    if (width >= 1280) {
        let widthBox = width >= 1300 ? 7.5 + (((width - 1250) / 50) / 2) : 7.5;
        document.querySelector('.header img:nth-child(1').src = 'img/illustration-woman-online-desktop.svg';
        document.querySelector('.header img:nth-child(2').src = 'img/bg-pattern-desktop.svg';
        document.querySelector('.header img:nth-child(3').style = 'left: ' + widthBox + 'rem';
    } else {
        document.querySelector('.header img:nth-child(3').style = 'display: none';
    }
}

// Rotate img Arrow
function rotateImg(itemId,rotate) {
    document.querySelector('#'+itemId+' img').style = 'transform: rotate('+rotate+'deg)';
}

// add element <p> in content
function addElementContent(itemId, textContent) {
    let newPNode = document.createElement("p");
    let newTextNode = document.createTextNode(textContent);
    newPNode.appendChild(newTextNode);
    rotateImg(itemId, 180);
    document.getElementById(itemId).appendChild(newPNode);
    document.getElementById(itemId).style = 'font-weight : 700';
    // document.getElementById(itemId).className = 'animated slideInDown';
    
}

// remove element <p> in content
function removeElementContent(itemId) {
    document.getElementById(itemId).style = 'font-weight : 400';
    rotateImg(itemId, 0);
    let menu = document.getElementById(itemId);
    menu.removeChild(menu.lastElementChild);
}

// Main function 
function myFunction(e) {
    let itemId = e.path[0].id ? e.path[0].id : e.path[1].id;
    let textContent = null;
    switch (itemId) {
        case "selectMaximumFile":
            textContent = text.selectMaximumFile;
            break;
        case "selectMemberTeam":
            textContent = text.selectMemberTeam;
            break;
        case "selectResetPassword":
            textContent = text.selectResetPassword;
            break;
        case "selectSubcription":
            textContent = text.selectSubcription;
            break;
        case "selectAdditionalSupport":
            textContent = text.selectAdditionalSupport;
            break;
    }
    let checkChild = document.querySelector("#" + itemId + ' p');
    checkChild ? removeElementContent(itemId) : addElementContent(itemId, textContent);

}

// Generat all function in Here 
styleScreen();
var elements = document.getElementsByClassName("faq");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}