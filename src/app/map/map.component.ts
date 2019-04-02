import { Component, OnInit } from '@angular/core';

import { defaults as defaultControls, FullScreen } from 'ol/control.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.extendView();

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

  extendView() {
    const coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

}
