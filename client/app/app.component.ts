import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [String(require('./app.component.css'))],
})

export class AppComponent {
  title = 'Typescript + Angular2 + Express4 + Webpack + omgwtfbbq'
}
