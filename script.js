var scores=[
    {
            "frstName":"kishan",
            "lastName":"jumnani",
            "country":"india",
            "score":90
    },
    {
        "frstName":"khushixysbjj",
        "lastName":"jumnani",
        "country":"india",
        "score":100
},
{
    "frstName":"skjdkjsd",
    "lastName":"jnajxhs",
    "country":"india",
    "score":120
},

]

function displaydata(data){
const main=document.getElementById("info");
main.innerHTML="";
// sorting 

//
data.forEach((item,index) =>{
    const box=document.createElement("div");
    box.classList.add("row");
    const name=document.createElement("p")
    name.innerText=(item.frstName+item.lastName);
   
    
    const country=document.createElement("p")
    country.innerText=item.country;
    country.autocapitalize;
    const score=document.createElement("p")
    score.innerText=item.score;
    const delete1=document.createElement("button");
    delete1.classList.add("delete");
    delete1.innerText="delete";

    delete1.addEventListener("click",()=>{
        deletescore(index)
    } );
   
    const incr=document.createElement("button");
    incr.innerText="+";
    incr.addEventListener("click",()=>{
        increasementscore(index)});
    const decr=document.createElement("button");
    
    decr.innerText="-";
    decr.addEventListener("click",()=>{
        decreasescore(index)
    } );
    box.append(name,country,score,delete1,incr,decr);


    main.append(box);
   console.log(item);  
});

}
function deletescore(index){
    scores.splice(index,1);
    displaydata(scores)
}
function increasementscore(index){
    scores[index]["score"] +=5;
    displaydata(scores);
}
function decreasescore(index){
    scores[index]["score"]-=5;
    displaydata(scores);
}
function comparaterT(a,b){
    if(a["score"]>b["score"]) return 1;
    if(a["score"]<b["score"]) return -1;
    else return 0;

}
function adddata(frstName,lastName,score,country){
    let obj={
        "frstName":frstName,
        "lastName":lastName,
        "score":score,
        "country":country
    }
   scores.push(obj);
scores.sort(comparaterT);
   displaydata(scores);
   console.log(scores);

}

window.addEventListener("load",()=>{
    // dispale data
    displaydata(scores),
    // form
    document.getElementById("scoreform").addEventListener("submit",(e)=>{
        e.preventDefault();
        //fetch data
        let frstName=document.getElementById("fname").value
        let lastName=document.getElementById("lname").value

        let score=parseInt(document.getElementById("score").value)
        let country=document.getElementById("country").value
        adddata(frstName,lastName,score,country);
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("score").value="";
        document.getElementById("country").value="";

    })

})