import { Link } from "react-router-dom"

//-------------------FUNCIONES FETCH--------------------
export async function getPeople() {
    try {
        let response = await fetch('https://swapi.info/api/people')
        let data = await response.json()
        if (response.ok) {                                              //↓↓↓ agrego info valiosa a cada objeto para tratarlos mejor, como su uid y la url local
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/people/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("people", JSON.stringify(data))        //-------↑ Esto me permite quedarme solo con el número de su url de API, para generar un uid
            return (data)           //↑↑ Al hacer el fetch lo cargamos directamente en el almacenamiento local del navegador
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
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/films/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("films", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function tradEpisode(num) {                  //Es una pijotada pero los ep. de SW SIEMPRE con números romanos
    switch (parseInt(num)) {
        case 1:
            return "I"
        case 2:
            return "II"
        case 3:
            return "III"
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        default:
            return num;
    }
}

export async function getShips() {
    try {
        let response = await fetch('https://swapi.info/api/starships')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/ships/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("ships", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getVehicles() {
    try {
        let response = await fetch('https://swapi.info/api/vehicles')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/vehicles/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("vehicles", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getSpecies() {
    try {
        let response = await fetch('https://swapi.info/api/species')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/species/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("species", JSON.stringify(data))
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
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/planets/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("planets", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}
                                                                        //Esta funcion sirve para, dada una url de elemento API, convertirla en su nombre y su enlace de página local
export const getName = (url, group) => group[0].name != null ?
    group.find((item) => item.url === url).name === "unknown" ?
        "desconocido"
        :
        <Link to={group.find((item) => item.url === url).page} className="detail-link">{group.find((item) => item.url === url).name}</Link>
    :
    <Link to={group.find((item) => item.url === url).page} className="detail-link">{group.find((item) => item.url === url).title}</Link>
