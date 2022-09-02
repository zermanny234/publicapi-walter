
const nationPopulation = async()=>{
    let fetchData = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    let jsonfetchData = await fetchData.json()
    let nationData = jsonfetchData.data
    let filternationData = nationData.map(citizens=>`<li>ID Nation:${citizens.IDNation}.....Nation:${citizens.Nation}.....ID Year:${citizens.ID_Year}....Year:${citizens.Year}.....Population:${citizens.Population}....Slug Nation:${citizens.SlugNation}</li><br>`)


    return document.body.innerHTML = filternationData.join('')


}

nationPopulation()