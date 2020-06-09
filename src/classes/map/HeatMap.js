// deck,gk
import { HeatmapLayer } from '@deck.gl/aggregation-layers'

// classes
import Layer from './Layer'
import HeatMapDataTable from '../data/HeatMapDataTable'

export default class HeatMap extends Layer {
  constructor (data, headers, latitudeHeaderIndex, longitudeHeaderIndex) {
    super()

    this.dataTable = new HeatMapDataTable()
    this.dataTable.headers = headers
    this.dataTable.latitudeHeaderIndex = latitudeHeaderIndex
    this.dataTable.longitudeHeaderIndex = longitudeHeaderIndex
    this.dataTable.setDataset(data)

    this.radiusPixels = 30
    this.intensity = 1
    this.threshold = 0.05
    this.opacity = 1
    this.getPosition = null
    this.getMetadata = {}
    this.name = ''
    this.showOnHover = []
  }

  render () {
    return new HeatmapLayer({
      id: this.id,
      data: this.dataTable.dataset,
      radiusPixels: this.radiusPixels,
      intensity: this.intensity,
      threshold: this.threshold,
      opacity: this.opacity,
      getPosition: this.dataTable.getObjectPosition()
    })
  }

  setRadiusScale (rs) {
    this.radiusScale = rs
  }

  setPickable (pickable) {
    this.pickable = pickable
  }

  setOpacity (opacity) {
    this.opacity = opacity
  }
}
