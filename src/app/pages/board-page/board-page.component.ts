import { Component, signal } from '@angular/core';
import { NavbarBoardComponent } from '@components/navbar-board/navbar-board/navbar-board.component';
import { FooterBoardComponent } from '@components/footer-board/footer-board.component';
import { TasksListComponent } from '@components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-board-page',
  imports: [NavbarBoardComponent, FooterBoardComponent, TasksListComponent],
  templateUrl: './board-page.component.html',
})
export default class BoardPageComponent {

  columns = signal<Column[]>([
    {
      title: 'Por Hacer',
      dotClass: 'bg-primary',
      border: 'border-primary-content',
      details: [
        { id: 1,
          title: 'Diseñar pantalla de login',
          description: 'Diseñar plantilla de inició de sesión',
          priority: 'Alta',
          status: 'Por Hacer',
          date: '24 oct'
        },
        {
          id: 2,
          title: 'Configurar rutas',
          description: 'Configurar rutas a ocupar',
          priority: 'Media',
          status: 'Por Hacer',
          date: '25 oct'
        },
      ]
    },
    {
      title: 'En Progreso',
      dotClass: 'bg-warning',
      border: 'border-warning-content',
      details: []
    },
    {
      title: 'Hecho',
      dotClass: 'bg-info',
      border: 'border-info',
      details: [
        { id: 3,
          title: 'Instalar Complementos',
          description: 'Instalar TalwindCSS y Daisy UI',
          priority: 'Baja',
          status: 'Por Hacer',
          date: '20 oct' },
      ]
    }
  ]);
}
