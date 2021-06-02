export function formatDocTrailAsJson(docData) {
    return {
        ...docData,
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: docData.line[0],
            },
          },
        ],
      }
    }