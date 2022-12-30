let char = 'X'

let scorex = 0

let scoreo = 0

let count = 0

let scx = document.getElementById('score-x')

let sco = document.getElementById('score-o')

let player = document.getElementById('player')

let all = document.getElementsByClassName('box')

player.innerHTML = `Move of player : ${char}`
scx.innerHTML = `Player X's score : ${scorex}`
sco.innerHTML = `Player O's score : ${scoreo}`

Array.from(all).forEach(function(ele)
{
    ele.addEventListener('mouseover',function()
    {
        this.style.backgroundColor = 'whitesmoke'
    })
    ele.addEventListener('mouseout',function()
    {
        this.style.backgroundColor = 'transparent'
    })
})

function check(i)
{
    if(document.getElementById(i).innerHTML=='')
    {
        document.getElementById(i).innerHTML = char
        count++
        Winner()
        char = (char=='X') ? 'O' : 'X'
        player.innerHTML = `Move of player : ${char}`
        document.getElementById(i).style.cursor = 'no-drop'
    }
    if(count==9)
        setTimeout(clear,500)
}

function Winner()
{
    const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
    let arr = document.getElementsByClassName('box')
    
    wins.forEach(function(ele)
    {
        if(
            (arr[ele[0]].innerHTML!='')
        &&
            (arr[ele[0]].innerHTML==arr[ele[1]].innerHTML) 
        &&
            (arr[ele[0]].innerHTML==arr[ele[2]].innerHTML))
        {
            for (let i = 0; i < 3; i++) {
                arr[ele[i]].style.backgroundColor = 'rgb(19, 255, 164)'              
            }
            setTimeout(() => {
                let win = (char=='X') ? 'O' : 'X';
                alert(`Player ${win} Won!`)
            switch(win)
            {
                case 'X':
                {
                    scorex++;
                    scx.innerHTML = `Player X's score : ${scorex}`;
                    break;
                }
                case 'O':
                {
                    scoreo++;
                    sco.innerHTML = `Player O's score : ${scoreo}`;
                    break;
                }
            }
            clear()
            }, 200);
            }
        }
    )
}

function reset()
{
    document.body.classList.add('have')
    setTimeout(() => {
    document.body.classList.remove('have')  
    }, 2000);
    setTimeout(() => {
        clear()
        scorex = scoreo = 0
        flag = false
        scx.innerHTML = `Player X's score : ${scorex}`
        sco.innerHTML = `Player O's score : ${scoreo}`
    }, 1000);
}

function clear()
{
    count = 0
    Array.from(document.querySelectorAll('.box')).forEach(function(ele)
    {
        ele.style.cursor = 'pointer'
        ele.innerHTML = ''
        ele.style.backgroundColor = 'transparent'
    }
    )
    player.innerHTML = `Move of player : ${char}`
}