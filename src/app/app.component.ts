import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="https://i.pinimg.com/236x/19/1e/e0/191ee09822d76185515ab787756c078c.jpg" alt="logos" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
     //In the previous step, you added the default HomeComponent to your app's template so its default HTML appeared in the app.

  styleUrl: './app.component.css'
 
})
export class AppComponent {
  title = 'homes';
}
///you created a new component for your app and gave it a filter edit control and button.