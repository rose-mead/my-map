export function formatDocTrailAsJson() {
    return {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    name: "Morning Run",
                    type: "9",
                    time: "2021-04-02T21:37:59Z"
                },
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [
                            174.976554,
                            -41.340573
                        ],
                        [
                            174.97661,
                            -41.340411
                        ],
                    ]
                }
            }
        ]
    }
}