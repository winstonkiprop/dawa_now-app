const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6a95ac611mshf86e355d5bd1843p1b10fdjsn42d2587a0e77',
		'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
	}
};

fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));