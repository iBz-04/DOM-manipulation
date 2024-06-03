// Welcome Page Fuctionality
const visitorPage = document.querySelector('.welcomePage')
const visitorNameBtn = document.querySelector('#visitorNameBtn')
const visitorName = document.querySelector('#visitorName')
const formTitle = document.querySelector('#formTitle')

function showVisitorPage(){
    setTimeout(()=> visitorPage.style.opacity = 1, 2000)
}
showVisitorPage()

// visitorName.onclick = ()=>{
//     this.style.border = '2px solid #a6e9f5'
// }


visitorNameBtn.addEventListener('click', enterName)
function enterName(e){
    e.preventDefault()
    let visitorBtn = e.target;
    let vName = visitorBtn.parentElement.children[1].value

    if(visitorName.value === ''){
        visitorPage.style.opacity = 1
        visitorName.style.border = '2px solid red'    
    }
    else{
        visitorPage.style.display ='none'
        formTitle.innerHTML = `Hi ${vName}, add your friends`
    }
  
}


//Selecting the Dom
const inputName = document.querySelector('#nameInput')
const inputNumber = document.querySelector('#numberInput')
const addBtn = document.querySelector('#addFriendBtn')
const friendsList = document.querySelector('.friendsList')
const msg = document.querySelector('.message')


// If the inputs ar empty we shall a border of red color to the fields
inputNumber.addEventListener('click', function(){
    this.style.border = '2px solid #a6e9f5'
})
inputName.addEventListener('click', function(){
    this.style.border = '2px solid #a6e9f5'
})

// Lets add an event listener to the button
addBtn.addEventListener('click', addFriendToList)

function addFriendToList(e){
    // prevent the form from submmitting
    e.preventDefault();

    let btn = e.target;
    let friendName = btn.parentElement[0].value;
    let friendNumber = btn.parentElement[1].value;

    // checking if the values are not put to flag a message to the user.
   if(inputName.value === '' || inputNumber.value === ''){
    msg.classList.add('active')
    setTimeout(()=> msg.remove(), 3000)
    inputName.style.border = '2px solid red' 
    inputNumber.style.border = '2px solid red' 
   }

    //    If not empty we are going to add a friend
    else{
        let newFriend = document.createElement('div')
        newFriend.classList.add('friend')
        newFriend.innerHTML = `
        <span class='friendName'>${friendName}</span>
        <span class='friendNumber'>${friendNumber}</span>
        `
        let deleteBtn = document.createElement('div')
        deleteBtn.classList.add('deleteFriend')
        deleteBtn.innerHTML = 'x'
        newFriend.append(deleteBtn)

        // Now lets append the new friend(Element) to the main element
        friendsList.append(newFriend)

        // Let us update the the list title
        const newTitle = document.querySelector('.friendsListTitle')
        newTitle.innerText = 'Added friend(s)'

        // Let us delete the user
        deleteBtn.onclick = ()=>{
            newFriend.classList.add('fall')
            newFriend.addEventListener('transitionend', function(){
                newFriend.remove()
            })
        }

        //Let us clear all the input for another friend mybe 
        inputName.value = ''
        inputNumber.value = ''
        inputName.style.border = 'none';
        inputName.style.border = 'none';
    }
}