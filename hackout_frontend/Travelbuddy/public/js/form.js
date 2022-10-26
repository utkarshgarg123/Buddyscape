const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
})

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

window.onload = () => {
    if (sessionStorage.name) {
        location.href = '/';
    }
}

if (name == null) { //login page
    submitBtn.addEventListener("click", () => {
        fetch('login-user', {
            method: 'post',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                validateData(data);
            })
    })
} else {
    submitBtn.addEventListener('click', () => {
        console.log("registering");
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.name) {
                    alert('register successful');
                }
                else alert(data);
            })
    })
}

const validateData = (data) => {
    if (!data.name) {
        alert("wrong email id or password");
    } else {
        // alert(data);

        // console.log(data);
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';
    }
}

