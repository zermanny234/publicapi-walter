
const getPublicApis = async() => {
	let entriesOne = await fetch('https://api.publicapis.org/entries')
	let entriesTwo= await entriesOne.json();
	let finalEntries= entriesTwo.entries
	let finalResult= finalEntries.map(publicapi => '<li> API: ${Publicapi.API}-----Description: ${Publicapi.Description}-----Auth: ${Publicapi.Auth}-----HTTPS: ${Publicapi.HTTPS}-----Cors: ${Publicapi.Cors}-----Link: ${Publicapi.Link}-----Category: ${Publicapi.Category}</li> <br>')

	return document.body.innerHTML = finalResult.join('');
}
getPublicApis()