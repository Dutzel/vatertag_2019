import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: ol.Map;
  constructor() { }

  ngOnInit() {
    const view = new ol.View({
      center: [-9101767, 2822912],
      zoom: 14
    });

    this.map = new ol.Map({
      controls: ol.control.defaults().extend([
        new ol.control.FullScreen({
          source: 'fullscreen'
        })
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: view
    });
  }

}
