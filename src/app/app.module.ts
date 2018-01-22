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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModalComponent } from './components/modal/modal.component';

// Services
import { GetLoginInfoService } from './services/get-login-info.service';
import { GetPostsService } from './services/get-posts.service';
import { GetCommentsService } from './services/get-comments.service';
import { UserService } from './services/user.service';
import { GetAlbumsService } from './services/get-albums.service';
import { GetPhotosService } from './services/get-photos.service';
import { AuthguardGuard } from './authguard.guard';

// Reducers
import { simpleReducer } from './reducers/simple.reducer';

// Utils
import { FilterPipe } from './pipe/filter.pipe';

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
		FilterPipe,
		ModalComponent
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
	providers: [GetLoginInfoService,
							GetPostsService,
							GetCommentsService,
							GetAlbumsService,
							GetPhotosService,
							UserService,
							AuthguardGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
