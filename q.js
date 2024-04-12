function mouseover(element){
    element.textContent = "Easy";
    element.style.color="green";


}
function mouseout(element){
    element.textContent="🔒";
    element.style.color="black";

}
function mouseout1(element){
    element.textContent="Play";
    element.style.color="black";

}
function mouseover1(element){
    element.textContent = "Medium";
    element.style.color="orange";

}
function mouseover2(element){
    element.textContent = "Hard";
    element.style.color="red";


} 

let Enable1=true;
let Enable2=true;

function mouseover3(element){
    if(Enable1){
    element.style.backgroundColor="black";
    element.style.color="white";
    element.style.backgroundColor="black";
    element.style.borderColor="black";

    }
}
function mouseout3(element){
    if(Enable2){
    element.style.backgroundColor="white";
    element.style.color="black";
    element.style.backgroundColor="white";
    element.style.borderColor="white";

    }}

b1=document.getElementById("1");
b2=document.getElementById("2");
b3=document.getElementById("3");
b4=document.getElementById("4");
const questions = [

    {
        question:"Who won the UCL in 2019?",
        answers:["Barcelona","Liverpool","Ajax","Tottenham"],
        correct:1,
        difficulty:"Easy",
    },
    {
        question:"Who won the Ballon d'Or in 2007?",
        answers:["Kaká","Ronaldinho","Maldini","Ferdinand"],
        correct:0,
        difficulty:"Easy",   
    },
    {
        question:"Which team has won the most Champions Leagues ?",
        answers:["Bayern Munich","AC Milan","Real Madrid","Liverpool"],
        correct:2,
        difficulty:"Easy"
            },
    {
        question:"Who is the best scorer of all time?",
        answers:["Pelé","Messi","Gerd Müller","Cristiano"],
        correct:3,
        difficulty:"Easy"   },   
    {
        question:"Which country has won the most World cups?",
        answers:["Italy","Brazil","Argentina","Germany"],
        correct:1,
        difficulty:"Easy"   },
    {
        question:"In what year was the first FIFA World Cup held?",
        answers:["1928","1930","1934","1938"],
        correct:1,
        difficulty:"Medium"    },
    {
        question:"Which Player has won the Ballon d'Or in 2002?",
        answers:["Zinedine Zidane","Ronaldo (R9)","Roberto Carlos","Oliver Kahn"],
        correct:1,
        difficulty:"Medium"   },
    {
        question:"How many goals have Lionel Messi scored in 2012?",
        answers:["91","75","90","89"],
        correct:0,
        difficulty:"Medium"    },
    {
        question:"Who was in 2013 UCL final?",
        answers:["Real Madrid vs Barcelona","Bayern Munich vs Real Madrid","Borussia Dortmund vs Bayern Munich","Barcelona vs Chelsea"],
        correct:2,
        difficulty:"Medium"    },
    {
        question:"Which country has won the first World Cup?",
        answers:["Brazil","Germany","Argentina","Uruguay"],
        correct:3,
        difficulty:"Medium"    },
    {
        question:"Who won the Golden Glove at the 2006 FIFA World Cup?",
        answers:["Edwin van der Sar","Iker Cassillas","Jens Lehmann","Gianluigi Buffon"],
        correct:3,
        difficulty:"Medium"    },
    {
        question:"Who won the Puskas award in 2018?",
        answers:["Benjamin Pavard","Mohamed Salah","Lionel Messi","Gareth Bale"],
        correct:1,
        difficulty:"Medium"    },
    {
        question:"In which year has Diego Maradona won the World Cup?",
        answers:["1982","1978","1986","1990"],
        correct:2,
        difficulty:"Medium"   },
    {
        question:"Which La Liga teams have never been in La Liga 2 (Spain 2nd division)?",
        answers:["Real Madrid | Barcelona | Atletic Bilbao","Real Madrid | Barcelona | Atletico Madrid","Real Madrid | Valencia | Atletico Madrid","Real Madrid | Barcelona | Valencia"],
        correct:0,
        difficulty:"Medium"  },
    {
        question:"How many goals has Islam Slimani scored with Algeria National Team?",
        answers:["40","38","41","43"],
        correct:2,
        difficulty:"Medium"  },
    {
        question:"Who eliminated Italy from quealifying to 2022 World Cup?",
        answers:["Portugal","Turkey","Poland","Ukraine","North Macedonia","Wales"],
        correct:4,
        difficulty:"Hard"   },                          
    {
        question:"Which goalkeeper has most goals scored?",
        answers:["José Luis Chilavert","Johnny Vegas Fernández","Jorge Campos","Rogério Ceni","Fernando Patterson","Dimitar Ivankov"],
        correct:3,
        difficulty:"Hard"   },
    {
        question:"Who is the goalscorer of the WorldCup history?",
        answers:["Gerd Müller","Just Fontaine","Ronaldo (R9)"," Miroslav Klose","Lionel Messi","Kylian Mbappé"],
        correct:3,
        difficulty:"Hard"  },

    {
        question:"In which year was FIFA founded?",
        answers:["1903","1904","1905","1906","1910","1901"],
        correct:1,
        difficulty:"Hard"  },
    {
        question:"In which year was the penalty shoot-out first added to football?",
        answers:["1978","1968","1970","1981","1975","1980"],
        correct:2,
        difficulty:"Hard"  },
    {
        question:"CONGRATULATIONS! You won The Football Quiz",
        answers:["1978","1968","1970","1981","1975","1980"],
        correct:2,
        difficulty:""  },        
]
let Lvl = 0;

const hard1 = document.getElementById("5");
hard1.style.display = "none";
const hard2 = document.getElementById("6");
hard2.style.display = "none";

const nocl= document.getElementsByClassName("Disb");
nocl.disabled = true;



const nextb = document.getElementById("nxt");
const retry = document.getElementById("rtr");
nextb.style.display = "none";
retry.style.display = "none";


const questdisplay = document.getElementById("lblp");

function Level(Lvl){
    Enable1 = true;
    Enable2 = true;

    let clvl= Lvl+1;
    document.getElementById("Level").textContent = 'Level '+ clvl;
    document.getElementById("diff").textContent = 'Difficulty: '+ questions[Lvl].difficulty;
    questdisplay.textContent = questions[Lvl].question;



let b = document.getElementsByTagName("button");
let N=3;
if(Lvl>=15){
    N=5;
    hard1.style.display = "block";
    hard2.style.display = "block";
    Enable1=true;
    Enable2=true;
    b[3].disabled=false;
    b[4].disabled=false;
}else{
    N=3;
}
    

       
for(let i=0;i<=N;i++){
    b[i].textContent = questions[Lvl].answers[i];




    function handleClick(){
        let index = i;
        const all = [0,1,2,3,4,5];
        const f = all.filter(f => f!== questions[Lvl].correct);
        const d = all.filter(d => d!== questions[Lvl].correct && d!== index);

        if(index==questions[Lvl].correct){

            questdisplay.textContent="Nice you Won";

            b[questions[Lvl].correct].style.backgroundColor = "green";
            b[questions[Lvl].correct].style.color = "white";
            b[questions[Lvl].correct].style.borderColor = "green";
            b[questions[Lvl].correct].disabled=true;

            nextb.style.display="block";
            retry.style.display="none";
            b[f[0]].style.backgroundColor="white";
            b[f[0]].style.color="black";
            b[f[0]].style.borderColor="white";
            b[f[0]].disabled=true;
            b[f[1]].style.backgroundColor="white";
            b[f[1]].style.color="black";
            b[f[1]].style.borderColor="white";
            b[f[1]].disabled=true;
            b[f[2]].style.backgroundColor="white";
            b[f[2]].style.color="black";
            b[f[2]].style.borderColor="white";
            b[f[2]].disabled=true;
            b[f[3]].style.backgroundColor="white";
            b[f[3]].style.color="black";
            b[f[3]].style.borderColor="white";
            b[f[3]].disabled=true;
            b[f[4]].style.backgroundColor="white";
            b[f[4]].style.color="black";
            b[f[4]].style.borderColor="white";
            b[f[4]].disabled=true;
            Enable1 = false;
            Enable2 = false;

            
        }else{            

            questdisplay.textContent="GG you Lost";


            b[questions[Lvl].correct].style.backgroundColor = "green";
            b[questions[Lvl].correct].style.color = "white";
            b[questions[Lvl].correct].style.borderColor = "green";
            b[questions[Lvl].correct].disabled=true;
            b[index].style.backgroundColor = "red";
            b[index].style.color = "white";
            b[index].style.borderColor = "red";
            b[index].disabled=true;
            nextb.style.display="none";
            retry.style.display="block";
            b[d[0]].style.backgroundColor="white";
            b[d[0]].style.color="black";
            b[d[0]].style.borderColor="white";
            b[d[0]].disabled = true;
            b[d[1]].style.backgroundColor="white";
            b[d[1]].style.color="black";
            b[d[1]].style.borderColor="white";
            b[d[1]].disabled = true;
            b[d[2]].style.backgroundColor="white";
            b[d[2]].style.color="black";
            b[d[2]].style.borderColor="white";
            b[d[2]].disabled = true;
            b[d[3]].style.backgroundColor="white";
            b[d[3]].style.color="black";
            b[d[3]].style.borderColor="white";
            b[d[3]].disabled = true;
            Enable1 = false;
            Enable2 = false;

        }
    }
    b[i].addEventListener("click", handleClick);

}

}
Level(Lvl);
function Nextlvl(){

    let b = document.getElementsByTagName("button");
    for(let i=0;i<=3;i++){
        b[i].style.backgroundColor="white";
        b[i].style.color="black";
        b[i].style.borderColor="white";
        b[i].disabled = false;

 }
    nextb.style.display="none";
        Level(Lvl+1);
        Lvl+=1;
        
    }



function Retry(){
    let b = document.getElementsByTagName("button");
    for(let i=0;i<=3;i++){
        b[i].style.backgroundColor="white";
        b[i].style.color="black";
        b[i].style.borderColor="white";
        b[i].disabled= false;
    }
    retry.style.display = "none";
    hard1.style.display = "none";
    hard2.style.display = "none";
Lvl=0;  
Level(0);

}
if(Lvl>19){
questions[20].difficulty.textContent="";
b1.style.display="none";
b2.style.display="none";
b3.style.display="none";
b4.style.display="none";
hard1.style.display="none";
hard2.style.display="none";

}
