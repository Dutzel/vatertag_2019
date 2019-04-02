import { Component, OnInit } from '@angular/core';

import {defaults as defaultControls, FullScreen} from 'ol/control.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

@Component({
  selector: 'app-full-screen-map',
  templateUrl: './full-screen-map.component.html',
  styleUrls: ['./full-screen-map.component.scss']
})
export class FullScreenMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const view = new View({
      center: [-9101767, 2822912],
      zoom: 14
    });

    const map = new Map({
      controls: defaultControls().extend([
        new FullScreen({
          source: 'fullscreen'
        })
      ]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: view
    });
  }

}
