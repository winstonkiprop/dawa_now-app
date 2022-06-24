document.addEventListener('DOMContentLoaded', function(){
    fetchDrugs();
    addDrugs()
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
      drugPrice.innerText = `Price: ${drugsObj.price}`;
      drugManufacturer.innerText = `Manufacturer: ${drugsObj.manufacturer}`;
   })
   //image.src = drugsObj.image;
    console.log(drugsObj.name);
})
})
}
  
function addDrugs(){
const form = document.getElementById('create-drug');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('drug-name').value;
    let price = document.getElementById('drug-price').value;
    let image = document.getElementById('drug-image').value;
    let manufacturer = document.getElementById('drug-manufacturer').value;

    post = {name, price, image, manufacturer}

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(post),
    }
    fetch('http://localhost:3000/drugs', configurationObject)
    .then(res=>res.json())
    .then(results=>
        console.log("new addition"))
        e.target.reset()
})
}