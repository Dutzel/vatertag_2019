import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { IframeViewComponent } from './iframe-view/iframe-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: MapComponent },
    { path: 'custom/:zoomlevel/:veloroute', component: MapComponent },
    { path: 'iframe', component: IframeViewComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
