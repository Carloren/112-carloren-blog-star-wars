export async function getPeople() {
    try {
        let response = await fetch('https://www.swapi.tech/api/people/?expanded=true')
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("people", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPerson(id) {
    try {
        let response = await fetch("https://www.swapi.tech/api/people/" + id)
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("peopleDetails", JSON.stringify({ ...JSON.parse(localStorage.getItem("peopleDetails")), ["person" + data.result.uid]: data.result }))
            return (data.result)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function getPeopleImages(uid) {
    switch (parseInt(uid)) {
        case 1:
            return "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796";

        case 2:
            return "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536"

        case 3:
            return "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536"

        case 4:
            return "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"

        case 5:
            return "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786"

        case 6:
            return "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593"

        case 7:
            return "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527"

        case 8:
            return "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666"

        case 9:
            return "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878"

        case 10:
            return "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"

        default:
            return "https://lumiere-a.akamaihd.net/v1/images/swcj-hero-container-mobile_c3fdce51.jpeg?region=0%2C0%2C1600%2C900";
    }
}

export async function getPlanets() {
    try {
        let response = await fetch('https://www.swapi.tech/api/planets')
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("planets", JSON.stringify(data.results))
            return (data.results)
        }
    }
    catch (error) {
        console.log(error);
    }
}


export async function getPlanet(id) {
    try {
        let response = await fetch("https://www.swapi.tech/api/planets/" + id)
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("planetsDetails", JSON.stringify({ ...JSON.parse(localStorage.getItem("planetsDetails")), ["planet" + data.result.uid]: data.result }))
            return (data.result)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function getPlanetsImages(uid) {
    switch (parseInt(uid)) {
        case 1:
            return "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534";

        case 2:
            return "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720"

        case 3:
            return "https://lumiere-a.akamaihd.net/v1/images/yavin-4-main_bd23f447.jpeg?region=331%2C0%2C949%2C534"

        case 4:
            return "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675"

        case 5:
            return "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711"

        case 6:
            return "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878"

        case 7:
            return "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878"

        case 8:
            return "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878"

        case 9:
            return "https://lumiere-a.akamaihd.net/v1/images/coruscant-main_d2fad5f2.jpeg?region=245%2C0%2C1430%2C804"

        case 10:
            return "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542"

        default:
            return "https://lumiere-a.akamaihd.net/v1/images/swcj-hero-container-mobile_c3fdce51.jpeg?region=0%2C0%2C1600%2C900";
    }
}