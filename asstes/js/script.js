let emailForm = document.querySelector('#emailForm');
let email = document.querySelector('#email');
let loading = document.querySelector('.emailNotice img');
let notice = document.querySelector('.notice');
let submit = document.querySelector('#submit');


emailForm.addEventListener('submit', function(e){
    e.preventDefault();
    let emailCheck;
    if( email.value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ) ){
        emailCheck = true;

    }else{
        emailCheck = false;
    }
    if( email.value == '' ){
        let span = document.createElement('span'); 
        let empty = document.createTextNode('Field must not be empty!!!');
        span.appendChild(empty);  
        span.style.backgroundColor = 'red';
        span.style.color = '#fff';
        loading.style.display = 'block';


        setTimeout(function(){ 
            notice.appendChild(span); 
            loading.style.display = 'none';
            setTimeout(function(){
                span.remove();
            }, 2000);

            
        }, 3000);
        email.value = '';

    }else if( emailCheck == false ){
        let span = document.createElement('span'); 
        let empty = document.createTextNode('email is wrong!!!!');
        span.appendChild(empty);  
        span.style.backgroundColor = 'pink';
        span.style.color = '#fff';
        loading.style.display = 'block';


        setTimeout(function(){ 
            notice.appendChild(span); 
            loading.style.display = 'none';
            setTimeout(function(){
                span.remove();
            }, 2000);

            
        }, 3000);
        email.value = '';
    } else if( emailCheck == true ){
        let span = document.createElement('span'); 
        let empty = document.createTextNode('email is ok ok ok!!!!');
        span.appendChild(empty);  
        span.style.backgroundColor = 'green';
        span.style.color = '#fff';
        loading.style.display = 'block';


        setTimeout(function(){ 
            notice.appendChild(span); 
            loading.style.display = 'none';
            setTimeout(function(){
                span.remove();
            }, 2000);

            
        }, 3000);
        email.value = '';
    }
});