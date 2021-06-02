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

export function toggleLineStyle(width) {
  // change the line when you click on it
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

  