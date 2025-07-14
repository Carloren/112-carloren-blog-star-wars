import { Link } from "react-router-dom"

export async function getPeople() {
    try {
        let response = await fetch('https://swapi.info/api/people')
        let data = await response.json()
        if (response.ok) {
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/people/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("people", JSON.stringify(data))
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
            data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/films/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("films", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function tradEpisode(num) {
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

export const getName = (url, group) => group[0].name != null ?
    group.find((item) => item.url === url).name === "unknown" ?
        "desconocido"
        :
        <Link to={group.find((item) => item.url === url).page} className="detail-link">{group.find((item) => item.url === url).name}</Link>
    :
    <Link to={group.find((item) => item.url === url).page} className="detail-link">{group.find((item) => item.url === url).title}</Link>
