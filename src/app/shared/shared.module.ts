import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	imports: [
		RouterModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent
	]
})
export class SharedModule { }
