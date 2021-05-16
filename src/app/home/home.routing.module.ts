import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { InfoComponent } from './page/info/info.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: 'user', component: UserComponent },
			{ path: 'info', component: InfoComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
