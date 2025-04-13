import { Component } from '@angular/core';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { HttpClientModule } from '@angular/common/http'; // ✅ ДОБАВЬ ЭТО

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CompanyListComponent], // ✅ HttpClientModule ОБЯЗАТЕЛЕН!
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hh-front';
}
