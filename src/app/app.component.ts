import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { cubeAnimation } from './animations';
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [cubeAnimation],
    imports: [RouterModule, NavComponent]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
