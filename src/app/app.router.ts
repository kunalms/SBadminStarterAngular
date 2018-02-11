import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { EventsComponent } from './events/events.component';



export const router: Routes= [
	{ path : '', redirectTo : 'about',pathMatch : 'full'},
	{ path : 'about', component : AboutComponent,},
	{ path : 'features', component : FeaturesComponent},
	{ path : 'events', component : EventsComponent}
];


export const routes :ModuleWithProviders = RouterModule.forRoot(router);