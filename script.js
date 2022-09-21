
//https://superheroapi.com/api/177749031490861/id/245
//



const baseurl=`https://akabab.github.io/superhero-api/api/id`
const imageDiv=document.getElementById('imghero')
//fxn to fetch the api 
const getSuperHero =(idd) =>{ 
     const nameDiv=document.getElementById('name')
    const call=`${idd}.json`
 
    fetch(`${baseurl}/${call}`)
     .then (response => response.json())
     .then (json => {
        console.log(json) 
        nameDiv.innerHTML=`<p id="name"> ${json.name}</p>`//if u write json.name u get the chara name etc.
        imageDiv.innerHTML = `<img src="${json.images.lg}"
         width=200 height=200  />`

  
   
   

    const statDiv=document.getElementById('stat')
     const user=json.powerstats
     console.log(user)
     statDiv.innerHTML=`<h2>Stat:</h2>`
     for (const key in user) {
        statDiv.innerHTML+=`<p>•
        ${key.toUpperCase()} : ${user[key]}
        <p>`
        console.log(`${key.toUpperCase()}: ${user[key]}`);
    }


   // statDiv.innerHTML=`<p>Stat : ${json.powerstats.intelligence}</p>`

})}
const randomhero =()=>{
    return Math.floor(Math.random()*256)
}
const searchInput= document.getElementById('inputType')  
 

const searchHero =(name) =>{

 console.log(searchInput.value)
 for(let i=0; i<=732;i++){

 fetch(`https://akabab.github.io/superhero-api/api/id/${i}.json`)
     .then (response => response.json())
     .then (json => {
         if(name==json.name)
         getSuperHero(json.id)


}
)
}
} 



//if u write json.name u get the chara name etc.
        //imageDiv.innerHTML = `<img src="${json.images.lg}"
         //width=200 height=200  />`

 

const btnID=document.getElementById('btnn')
btnID.onclick=() => getSuperHero(randomhero() )
const srchbtnId=document.getElementById('srchBtn')
srchbtnId.onclick =()=>searchHero(searchInput.value)
// image of superhero stored in img varibale 
// select the body of the html and update it to the image url 

 