"use strict"

const funcRequest = (key) => {
    return fetch('', {
        headers: {
            "Content-Type": "application/json",
            "X-Auth": key,
        }
    }).then(res => res.json())
}

const generateKey = (length) => {
    let key = ''

    const characters = 'abcdef0123456789'

    for(let i = 0; i < length; i++){
        key += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    funcRequest(key)
        .then(data => {
            if(data.code > 205){
                console.log('false');
                generateKey(64)
            }else{
                console.log('key true ' + key);
            }
        })
        .catch(() => {
            console.log('error');
        })
}

generateKey(64)