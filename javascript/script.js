console.log("Welcome to the tic-tac-toe");
let music = new Audio('sound/music.mp3');
let turnmusic = new Audio('sound/ting.mp3');
let gameOver = new Audio('sound/gameover.mp3');
let turn = "X";
let isgameOver = false;
let reset = document.getElementById('reset');
//=== means type aur value dono same hona chahiye wahi== means only value same hona chahiye
//Functions to change the turn of the players
const changeTurn = () => {
    if (turn === "X")
        return "0";
    else
        return "X";
}
//Functions to check for a win
const checkwin = () => {
    let arrayboxtext = Array.from(document.getElementsByClassName('boxText'));
    let wins = [
        [0, 1, 2, 6, 6,0],
        [3, 4, 5, 6, 18,0],
        [6, 7, 8, 6, 30,0],
        [0, 3, 6, -6.5, 18, 90],
        [1, 4, 7, 5.5, 18, 90],
        [2, 5, 8, 17.5, 18, 90],
        [0, 4, 8, 6, 18, 45],
        [2, 4, 6, 6, 18, 135]
    ];
    console.log(arrayboxtext);
    console.log("Hello");
    console.log(arrayboxtext[0]);
    /* 
    for(let i=0;i<arrayboxtext.length;i++)
    {
      if((arrayboxtext[0].innerText===arrayboxtext[1].innerText)&&(arrayboxtext[2].innerText===arrayboxtext[1].innerText)&&(arrayboxtext[0].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[0].innerText+" is the winner";
        }
        if((arrayboxtext[3].innerText===arrayboxtext[4].innerText)&&(arrayboxtext[4].innerText===arrayboxtext[5].innerText)&&(arrayboxtext[3].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[3].innerText+" is the winner";
        }
        if((arrayboxtext[6].innerText===arrayboxtext[7].innerText)&&(arrayboxtext[7].innerText===arrayboxtext[8].innerText)&&(arrayboxtext[6].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[0].innerText+" is the winner";
        }
        if((arrayboxtext[0].innerText===arrayboxtext[3].innerText)&&(arrayboxtext[3].innerText===arrayboxtext[6].innerText)&&(arrayboxtext[0].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[0].innerText+" is the winner";
        }
        if((arrayboxtext[1].innerText===arrayboxtext[4].innerText)&&(arrayboxtext[4].innerText===arrayboxtext[7].innerText)&&(arrayboxtext[1].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[1].innerText+" is the winner";
        }
        if((arrayboxtext[2].innerText===arrayboxtext[5].innerText)&&(arrayboxtext[5].innerText===arrayboxtext[8].innerText)&&(arrayboxtext[2].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[0].innerText+" is the winner";
        }
        if((arrayboxtext[0].innerText===arrayboxtext[4].innerText)&&(arrayboxtext[4].innerText===arrayboxtext[8].innerText)&&(arrayboxtext[0].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[0].innerText+" is the winner";
        }
        if((arrayboxtext[2].innerText===arrayboxtext[4].innerText)&&(arrayboxtext[4].innerText===arrayboxtext[6].innerText)&&(arrayboxtext[2].innerText!==''))
        {
          document.querySelector('.info').innerHTML="Congratulations  "+arrayboxtext[2].innerText+" is the winner";
        }
  
    }
 Instead of using for loop in these arrat of array as used above we can use
 for each loop  taaaki jyada line of code na likhna pade hume har case ka code isme aajayega*/
    wins.forEach((e) => {
        if ((arrayboxtext[e[0]].innerText === arrayboxtext[e[1]].innerText) && (arrayboxtext[e[1]].innerText === arrayboxtext[e[2]].innerText) && (arrayboxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerHTML = "Congratulations  " + arrayboxtext[e[2]].innerText + " is the winner";
            isgameOver = true;
            document.querySelector('.imgBox img').style.width = "180px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            gameOver.play();
           // document.querySelector('.line').style.display='block';
        }
    })

}
//Game Logic
let box = document.getElementsByClassName('box');//It returns the HTML collection of the elements
console.log(box);
Array.from(box).forEach((element) => {
    console.log(element);
    let boxtext = element.querySelector('.boxText');
   // music.play();
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnmusic.play();
            checkwin();
            if (!isgameOver) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    })
})
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach((element) => {
        element.innerText = '';
    })
    isgameOver = false;
    turn = 'X';
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgBox img').style.width = '0px';
    //document.querySelector('.line').style.display='none';
    document.querySelector('.line').style.width='0';
})

