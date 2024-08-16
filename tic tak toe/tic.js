let move = 'x'
let won = false
let count = 0
const container = document.querySelector('.container')
function drawField(){
    count = 0
    won = false
    move = 'x'
    container.innerHTML = `
        <div class="diagonal">
            <div onclick="Move(event)" class="right bottom a"></div>
            <div onclick="Move(event)" class="right bottom b"></div>
            <div onclick="Move(event)" class="bottom c"></div>
        </div>
        <div class="diagonal">
            <div onclick="Move(event)" class="right bottom d"></div>
            <div onclick="Move(event)" class="right bottom e"></div>
            <div onclick="Move(event)" class="bottom f"></div>
        </div>
        <div class="diagonal">
            <div onclick="Move(event)" class="right g"></div>
            <div onclick="Move(event)" class="right h"></div>
            <div onclick="Move(event)" class="i"></div>
        </div>
    `

}

function Move(event){
    count++
    event.preventDefault()
    if (move=='x'){
        event.target.innerText = 'x'
        move = 'o'
        event.target.onclick = ''

    }
    else{
        event.target.innerText = 'o'
        event.target.onclick = ''
        move = 'x'
    }
    const a = document.querySelector('.a').textContent
    const b = document.querySelector('.b').textContent
    const c = document.querySelector('.c').textContent
    const d = document.querySelector('.d').textContent
    const e = document.querySelector('.e').textContent
    const f = document.querySelector('.f').textContent
    const g = document.querySelector('.g').textContent
    const h = document.querySelector('.h').textContent
    const i = document.querySelector('.i').textContent
    if ((a===b && a===c) || (a===d && a===g) || (a===e && a===i)){
        if (a==='x'){
            alert('X won')
            won = true
        }
        else if(a==='o'){
            alert('O won')
            won = true
        }

    }
    else if ((b===e && b===h)){
        if (b==='x'){
            alert('X won')
            won = true
        }
        else if(b==='o'){
            alert('O won')
            won = true
        }

    }
    else if ((c===f && c===i) || (c===e && c===g)){
        if (c==='x'){
            alert('X won')
            won = true
        }
        else if(c==='o'){
            alert('O won')
            won = true
        }
    }
    if (won){
            const divs = document.querySelectorAll('div')
            divs.forEach((e)=>{
                e.onclick = ''
            })
    }
    else if(count===9){
        alert('Draw')
    }
}

drawField()