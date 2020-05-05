import ArcDataTable from "./ArcDataTable";

import axios from "axios";
import { Promise } from "bluebird";
import { decode, randomColor } from "../map/Helper";

export default class RouteDataTable extends ArcDataTable {
  async fetchDataFromGoogleApi() {
    this.dataset = await Promise.map(
      this.dataset,
      async (trip) => {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${
            trip[this.startLatitudeHeaderIndex]
          },${trip[this.startLongitudeHeaderIndex]}&destination=${
            trip[this.endLatitudeHeaderIndex]
          },${trip[this.endLongitudeHeaderIndex]}&key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`
        );

        if (response.data.routes.length === 0) {
          trip.push([]);
          return trip;
        }

        const encodedPolyline =
          response.data.routes[0].overview_polyline.points;
        const decodedPolyline = decode(encodedPolyline);
        console.log(decodedPolyline);
        trip.push(randomColor());
        trip.push(decodedPolyline);

        return trip;
      },
      { concurrency: 2 }
    );
  }

  callFetchDataFromGoogleApi() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.fetchDataFromGoogleApi();
        resolve();
      } catch (err) {
        reject();
      }
    });
  }
}
