const public = async()=>{
        let fetchPublicData = await fetch("https://api.publicapis.org/entries")
        let PublicData = await fetchPublicData.json()
        let finalPublicData = PublicData.entries
        let finalResult = finalPublicData.map(public => `<li> API: ${public.API}-----Description: ${public.Description}-----${public.Auth}----HTTPS: ${public.HTTPS}-----Cors: ${public.Cors}----Link: ${public.Link}----Category: ${public.Category}</li> <br>`)
    
        return document.body.innerHTML = finalResult.join('');
    }
getpublic()