import { Component } from '@angular/core';

@Component({
  selector: 'navbar-board-component',
  imports: [],
  templateUrl: './navbar-board.component.html',
})
export class NavbarBoardComponent {

  logout(){
    window.location.assign('./');
  }

}
