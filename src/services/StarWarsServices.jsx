export async function getPeople() {
    try {
        let response = await fetch('https://swapi.info/api/people')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("people", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPlanets() {
    try {
        let response = await fetch('https://swapi.info/api/planets')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("planets", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getFilms() {
    try {
        let response = await fetch('https://swapi.info/api/films')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("films", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}