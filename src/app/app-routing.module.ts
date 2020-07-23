import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paths } from './utility/path-resolver/paths';
import { HomeComponent } from './components/home/home.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { StoryComponent } from './components/story/story.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PathResolveService } from './utility/path-resolver/path-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: paths.home, pathMatch: 'full' },
  { path: paths.home, component: HomeComponent },
  { path: paths.send, component: SendMessageComponent },
  { path: paths.fetch, component: ReceiveMessageComponent },
  { path: paths.story, component: StoryComponent },
  { path: '**', resolve: { path: PathResolveService }, component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
