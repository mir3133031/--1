let a = +prompt(`a`)
let m = prompt(`method`)
let b = +prompt(`b`)

if (m === `+`) {
    alert(a + b)
} else if (m === `-`) {
    alert(a - m)
} else if (m === `*`) {
    alert(a * b)
} else if(m === `/`){
    alert(a / b )
}else console.log(`error`)