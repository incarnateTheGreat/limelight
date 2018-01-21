import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { LoginInfoService } from './services/login-info.service';
import { UserService } from './services/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Reducers
import { simpleReducer } from './reducers/simple.reducer';

// Routes
const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },
	{ path: 'albums', component: AlbumsComponent, canActivate: [AuthguardGuard] },
	{ path: 'posts', component: PostsComponent, canActivate: [AuthguardGuard] },
	{ path: 'todos', component: TodosComponent, canActivate: [AuthguardGuard] },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		PostsComponent,
		AlbumsComponent,
		TodosComponent,
		DashboardComponent,
		NavComponent,
		NotFoundComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		StoreModule.forRoot({ userinfo: simpleReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 18
		})
	],
	providers: [LoginInfoService, UserService, AuthguardGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
