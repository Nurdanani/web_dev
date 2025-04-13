import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ импортируй это
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule], // ✅ обязательно, чтобы работали *ngIf и *ngFor
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent {
  companies: Company[] = [];
  selectedVacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.companyService.getCompanyVacancies(companyId).subscribe((data) => {
      this.selectedVacancies = data;
    });
  }
}
