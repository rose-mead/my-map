const regions = {
    'Northland': "NZ-NTL",
    'Auckland': "NZ-AUK",
    'Waikato': "NZ-WKO",
    'Coromandel': ["NZ-WKO", "DOC-COR"],
    'Bay of Plenty': "NZ-BOP",
    'East Coast': "NZ-GIS",
    'Taranaki': "NZ-TKI",
    'Manawatu/Whanganui': "NZ-MWT", 
    "Central North Island": ["NZ-MWT", "DOC-CNI"],
    "Hawke's Bay": "NZ-HKB",
    'Wellington/Kapiti': "NZ-WGN",
    'Wairarapa': "DOC-WPA",
    'Chatham Islands': "NZ-CIT",
    'Nelson/Tasman': "NZ-NSN",
    'Marlborough': "NZ-MBH",
    'West Coast': "NZ-WTC",
    'Canterbury': "NZ-CAN",
    'Otago': "NZ-OTA",
    'Southland': "NZ-STL", 
    'Fiordland': ["DOC-FIL", "NZ-STL"],
    }

    const newArr = [
    ]

    
    // const object = {}
    let i = 1
    for(key in regions){
        const object = {
            id: i++,
            name: key,
            codes: regions[key]
        }
        if(!Array.isArray(regions[key])){
            object.codes = [regions[key]]
        }
        // if(regions[key][0] != undefined){
        //     console.log(key)
        // }
        newArr.push(object)
    }

    // some regions have two codes
    // some codes have two regions

    console.log(newArr)


    // regions = [
//   { id: 1, name: 'Northland', codes: [ 'NZ-NTL' ] },
//   { id: 2, name: 'Auckland', codes: [ 'NZ-AUK' ] },
//   { id: 3, name: 'Waikato', codes: [ 'NZ-WKO' ] },
//   { id: 4, name: 'Coromandel', codes: [ 'NZ-WKO', 'DOC-COR' ] },
//   { id: 5, name: 'Bay of Plenty', codes: [ 'NZ-BOP' ] },
//   { id: 6, name: 'East Coast', codes: [ 'NZ-GIS' ] },
//   { id: 7, name: 'Taranaki', codes: [ 'NZ-TKI' ] },
//   { id: 8, name: 'Manawatu/Whanganui', codes: [ 'NZ-MWT' ] },
//   {
//     id: 9,
//     name: 'Central North Island',
//     codes: [ 'NZ-MWT', 'DOC-CNI' ]
//   },
//   { id: 10, name: "Hawke's Bay", codes: [ 'NZ-HKB' ] },
//   { id: 11, name: 'Wellington/Kapiti', codes: [ 'NZ-WGN' ] },
//   { id: 12, name: 'Wairarapa', codes: [ 'DOC-WPA' ] },
//   { id: 13, name: 'Chatham Islands', codes: [ 'NZ-CIT' ] },
//   { id: 14, name: 'Nelson/Tasman', codes: [ 'NZ-NSN' ] },
//   { id: 15, name: 'Marlborough', codes: [ 'NZ-MBH' ] },
//   { id: 16, name: 'West Coast', codes: [ 'NZ-WTC' ] },
//   { id: 17, name: 'Canterbury', codes: [ 'NZ-CAN' ] },
//   { id: 18, name: 'Otago', codes: [ 'NZ-OTA' ] },
//   { id: 19, name: 'Southland', codes: [ 'NZ-STL' ] },
//   { id: 20, name: 'Fiordland', codes: [ 'DOC-FIL', 'NZ-STL' ] }
// ]


console.log(JSON.stringify(newArr, null, 2))