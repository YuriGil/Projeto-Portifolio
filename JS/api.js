async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/YuriGil/Projeto-Portifolio/main/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}