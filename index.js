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
   listEl.addEventListener('click', function(){
      const drugImg = document.getElementById('img-src')
      const drugPrice = document.getElementById('price')
      const drugManufacturer = document.getElementById('manufacturer')

      drugImg.src = drugsObj.image;
      drugPrice.innerText = drugsObj.price;
      drugManufacturer.innerText = drugsObj.manufacturer;
   })
   //image.src = drugsObj.image;
    console.log(drugsObj.name);
})
})
}
  
