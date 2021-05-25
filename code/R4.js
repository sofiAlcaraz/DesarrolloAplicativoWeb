
const tabla=document.querySelector(".table");

async function cargarTablaAsync(){
	let info;
	const data=await fetch("http://api.mediastack.com/v1/news?access_key=3faf1d1c65d9a99fd189832176d0d072");
	const resultado= await data.json();
	info = resultado.data.map(e => {
  				return `<tr><td>${e.author}</td><td>${e.category}</td><td>${e.country}</td>
  				<td>${e.language}</td><td>${e.source}</td>`;
  			}).join('');

  	tabla.innerHTML = info;
}
cargarTablaAsync();



      
      
      
      
      
