document.addEventListener('DOMContentLoaded', function(){
    fetchDrugs();
})
function fetchDrugs(){
const url = " http://localhost:3000/drugs";
fetch(url)
.then(response=>response.json())
.then(data=>{data.forEach(drugsObj => {
   //const drugName = document.getElementById('asset1');
   const drugUl = document.getElementById('drug-list');
   const listEl = document.createElement('li');
   listEl.innerText = drugsObj.name;
   drugUl.appendChild(listEl);

   //image.src = drugsObj.image;
    console.log(drugsObj.name);
})
})
}
  
