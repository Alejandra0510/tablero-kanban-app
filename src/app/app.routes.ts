import { Routes } from '@angular/router';
import { TaskDetailsComponent } from '@components/task-details/task-details.component';
import BoardPageComponent from '@pages/board-page/board-page.component';
import { LoginComponent } from '@shared/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'board',
    component: BoardPageComponent,
  },
  {
    path: 'task-details',
    component: TaskDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
