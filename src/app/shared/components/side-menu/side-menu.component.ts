import { Component } from '@angular/core';

interface menuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public reactiveMenu: menuItem[] = [
    { title: 'Basicos', route: './reactive/basic'},
    { title: 'Dinamicos', route: './reactive/dynamic'},
    { title: 'Switches', route: './reactive/switches'},
  ]

  public authMenu: menuItem[] = [

    { title: 'Registro', route: './auth'},
  ]

}
