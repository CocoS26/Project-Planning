// import axios


// Or use this for current location
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
// https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
// returns longitude and latitude of current location 


const homePostcode = "SW8 2JU"
const officePostcode = "E14 5GL"

// TEST IF AXIOS WORKS WITH THIS API
// 
// const api = axios.create({
//     baseURL: 'https://api.postcodes.io'
// })

// const getLocationData = (postcode) => {
//     return api.get(`/postcodes/${postcode}`)
//     .then((res) => {
//         return SOMETHING
//     })
// }

const farmReturn = {
    "status":200,
    "result":{
        "postcode":"E14 5GL",
        "quality":1,
        "eastings":537774,
        "northings":180361,
        "country":"England",
        "nhs_ha":"London",
        "longitude":-0.016276,
        "latitude":51.505395,
        "european_electoral_region":"London",
        "primary_care_trust":"Tower Hamlets",
        "region":"London",
        "lsoa":"Tower Hamlets 033A",
        "msoa":"Tower Hamlets 033",
        "incode":"5GL",
        "outcode":"E14",
        "parliamentary_constituency":"Poplar and Limehouse",
        "admin_district":"Tower Hamlets",
        "parish":"Tower Hamlets, unparished area",
        "admin_county":null,
        "date_of_introduction":"200905",
        "admin_ward":"Canary Wharf",
        "ced":null,
        "ccg":"NHS North East London",
        "nuts":"Tower Hamlets",
        "pfa":"Metropolitan Police",
        "codes":{
            "admin_district":"E09000030",
            "admin_county":"E99999999",
            "admin_ward":"E05009323",
            "parish":"E43000220",
            "parliamentary_constituency":"E14000882",
            "ccg":"E38000255",
            "ccg_id":"A3A8R",
            "ced":"E99999999",
            "nuts":"TLI42",
            "lsoa":"E01004277",
            "msoa":"E02006854",
            "lau2":"E09000030",
            "pfa":"E23000001"
        }
    }
}

const currentReturn = {
    "status":200,
    "result":{
        "postcode":"SW8 2JU",
        "quality":1,
        "eastings":529879,
        "northings":176879,
        "country":"England",
        "nhs_ha":"London",
        "longitude":-0.131244,
        "latitude":51.475971,
        "european_electoral_region":"London",
        "primary_care_trust":"Lambeth",
        "region":"London",
        "lsoa":"Lambeth 004D",
        "msoa":"Lambeth 004",
        "incode":"2JU",
        "outcode":"SW8",
        "parliamentary_constituency":"Vauxhall",
        "admin_district":"Lambeth",
        "parish":"Lambeth, unparished area",
        "admin_county":null,
        "date_of_introduction":"198001",
        "admin_ward":"Stockwell West & Larkhall",
        "ced":null,
        "ccg":"NHS South East London",
        "nuts":"Lambeth",
        "pfa":"Metropolitan Police",
        "codes":{
            "admin_district":"E09000022",
            "admin_county":"E99999999",
            "admin_ward":"E05014111",
            "parish":"E43000212",
            "parliamentary_constituency":"E14001008",
            "ccg":"E38000244",
            "ccg_id":"72Q",
            "ced":"E99999999",
            "nuts":"TLI45",
            "lsoa":"E01003122",
            "msoa":"E02000621",
            "lau2":"E09000022",
            "pfa":"E23000001"
        }
    }
}

function distance(current, farm) {

    const lon1 = current.result.longitude
    const lat1 = current.result.latitude
    const lon2 = farm.result.longitude
    const lat2 = farm.result.latitude

    const pi = (Math.PI)/180
    const cos = Math.cos
    const distance = 12742 * Math.asin(Math.sqrt(0.5 - cos((lat2 - lat1) * pi)/2 + cos(lat1 * pi) * cos(lat2 * pi) * (1 - cos((lon2 - lon1) * pi))/2))
 
    return distance
  }

console.log(distance(currentReturn, farmReturn))
