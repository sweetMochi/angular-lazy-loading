import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { UserComponent } from './page/user/user.component';
import { InfoComponent } from './page/info/info.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


@NgModule({
	declarations: [
		HomeComponent,
		UserComponent,
		InfoComponent
	],
	imports: [
		RouterModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
