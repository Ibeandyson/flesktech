

document.querySelector('form').addEventListener('submit', function(e){
e.preventDefault();
let name = document.querySelector('.name').value
let email = document.querySelector('.email').value
let message = document.querySelector('.message').value;
if(name <= 3 && !email.includes('@')){
    alert('four characters at minimum is required on the name field');
}
})