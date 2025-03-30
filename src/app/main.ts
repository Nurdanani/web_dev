<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
}).catch((err) => console.error(err));
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
>>>>>>> e46d3e32c406d3b9609e467e0d7a28c47fcc5c4c
