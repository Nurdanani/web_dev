import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
