

function OpeningCeremony() {
   let k;
    let sports={red:0,blue:0,green:0,yellow:0};
    setTimeout(()=>{
        console.log("let the game begin");
        let sports={red:0,blue:0,green:0,yellow:0};
        setTimeout(()=>Race100M(sports,LongJump),3000);

    },1000)
     
    
}

function Race100M(sports,LongJump){
    console.log("before Race100m The intial score of all the colour in Race",sports);
   let map=new Map();
   for(let key in sports){
   let randnum=Math.random()*5+10;
   map.set(key,randnum);
    
   }
  let newarray=Array.from(map.entries());
  newarray.sort((a,b)=>a[1]-b[1]);
 
  
sports[newarray[0][0]]=50;
  sports[newarray[1][0]]=25;
 console.log("After Race100m The  score of all the colour in Race",sports,"and the winner of Race100 is ",newarray[0][0],"with score 50");
 LongJump(sports,HighJump);
}

function LongJump(sports,HighJump){
    console.log("before LongJump The intial score of all the colour in Race",sports);
  setTimeout(()=>{let newmap=new Map();
    let i=0;
    for(let key in sports){
     newmap.set(i,key);
     i++;
    }
   
    let randcol=Math.floor(Math.random()*4)
    
    sports[newmap.get(randcol)]=150;
    k=newmap.get(randcol);
    console.log("After LongJump The  score of all the colour in Race",sports,"and the winner of LongJump is ",newmap.get(randcol),"with score 150");
    HighJump(sports,AwardCeremony,2000)},2000)
   
    
}
function HighJump(sports,AwardCeremony){
   console.log("before HighJump The intial score of all the colour in Race",sports);
    let person = prompt("What colour secured the highest jump?");
    
    if (person!="red" && person!="yellow"&&  person!="blue"&& person!="green") {
      console.log("Event was cancelled");
      
    } else {
      sports[person]+=100;
      
    }
    console.log("After HighJump The  score of all the colour in Race",sports,"and the winner of HighJump is ",k,`with score ${sports[k]}`);
    AwardCeremony(sports);
}
function AwardCeremony(sports){
    console.log("sports in awardceremony is ",sports);
    let finallist=[];

    for(let key in sports){
       finallist.push([key,sports[key]]);
    }
    finallist.sort((a,b)=>b[1]-a[1]);
    console.log(finallist);
   console.log(`${finallist[0][0]} came first with ${finallist[0][1]} points`);
   console.log(`${finallist[1][0]} came second with ${finallist[1][1]} points`);
   console.log(`${finallist[2][0]} came third with ${finallist[2][1]} points`);
   console.log(`${finallist[3][0]} came fourth with ${finallist[3][1]} points`);
}

OpeningCeremony();
