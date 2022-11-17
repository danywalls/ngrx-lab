import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './pages/home/home.component';
import {homeReducer} from './pages/home/state/home.reducers';
import {SettingsComponent} from './pages/settings/settings.component';


const state = {
  'home': homeReducer
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(state),
    StoreDevtoolsModule.instrument({
      name: 'ngrx-lab',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: []
})
export class AppModule {
}
