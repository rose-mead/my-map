function getRegionCode(region) {
    const regions = [
        ["NZ-NTL", "Northland"], 
        ["NZ-AUK", "Auckland"], 
        ["NZ-WKO", "Waikato + Coromandel" ],
        ["DOC-COR", "Coromandel" ],
        ["NZ-BOP", "Bay of Plenty" ],
        ["NZ-GIS", "East Coast" ],
        ["NZ-TKI", "Taranaki"],
        ["NZ-MWT", "Manawatu/Whanganui + Central North Island" ],
        ["DOC-CNI", "Central North Island"],
        ["NZ-HKB", "Hawke's Bay"],
        ["NZ-WGN", "Wellington/Kapiti" ],
        ["DOC-WPA", "Wairarapa"],
        ["NZ-CIT", "Chatham Islands"],
        ["NZ-NSN", "Nelson/Tasman" ],
        ["NZ-MBH", "Marlborough"],
        ["NZ-WTC", "West Coast" ],
        ["NZ-CAN", "Canterbury" ],
        ["NZ-OTA", "Otago" ],
        ["NZ-STL", "Southland + Fiordland"],
        ["DOC-FIL", "Fiordland"],
    ]
       return regions.map(reg => {
           console.log(reg)
            if(reg[1] === region) {
                return reg[0]
            } else return 'not found'
        })
}

module.exports = {
    getRegionCode
}