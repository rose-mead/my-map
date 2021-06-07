export function formatDocTrailAsJson(docData) {
    return {
        ...docData,
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: docData.line[0] || null,
            },
          },
        ],
      }
    }

export function toggleLineStyle(width) {
  // change the line when you click on it
   // if exiting toggle, make linethickness 50
    // if entering hover, make linethickness 100
    // if during hover, don't change thickness
    if (lineStyling.lineWidth == width) {
      return null
    } else if (lineStyling.lineWidth == 50) {
      return {
        lineColor: [0, 0, 255, 200],
        lineWidth: 100,
      }
    } else {
      return{
        lineColor: [0, 255, 255, 200],
        lineWidth: 50,
      }
    }
  }

  