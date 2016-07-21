import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_BINDINGS, 
         ROUTER_PROVIDERS, 
         LocationStrategy, 
         PathLocationStrategy } from '@angular/router';

import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, 
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);