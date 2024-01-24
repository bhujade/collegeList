
let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button")

btn.addEventListener("click", async ()=>{
      let country = document.querySelector("input").value;
      console.log(country);
      let getArr =   await getCollege(country);
      
      show(getArr)
});

function show(getArr){
    let list = document.querySelector("#list")
    for(col of getArr){
        console.log(col.name)

        let li = document.createElement("li")
        li.innerText=col.name;
        list.appendChild(li);

    }
}



async function getCollege(country){
    try{
        let nn = await axios.get(url+country)
        return nn.data;
   }catch(err){
    console.log("error: ",err)
    }

} 
