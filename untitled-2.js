const getPublicApis = async() => {

    let fetchPublicData = await fetch("https://api.publicapis.org/entries")

    let PublicData = await fetchPublicData.json()
    
    let finalPublicData = PublicData.entries
    let finalResult = finalPublicData.map(publicapi => `<li> API: ${publicapi.API}-----Description: ${publicapi.Description}-----${publicapi.Auth}----HTTPS: ${publicapi.HTTPS}-----Cors: ${publicapi.Cors}----Link: ${publicapi.Link}----Category: ${publicapi.Category}</li> <br>`)
        
    return document.body.innerHTML =Result.join('');
}
getPublicApis()