import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';

// Services
import { LoginInfoService } from './services/login-info.service';

// Routes
const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'albums', component: AlbumsComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'todos', component: TodosComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		PostsComponent,
		AlbumsComponent,
		TodosComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [LoginInfoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
