from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
    path('companies/create/' , views.create_company),
    path('companies/<int:id>/update/' , views.update_company),
    path('companies/<int:id>/delete/' , views.delete_compsny),
    path('vacancies/create/', views.create_vacancy),
    path('vacancies/<int:id>/update/', views.update_vacancy),
    path('vacancies/<int:id>/delete/', views.delete_vacancy),
    path('companies/class/', views.CompanyListCreateAPIView.as_view()),
    path('companies/class/<int:id>/', views.CompanyRetrieveUpdateDestroyAPIView.as_view()),
    path('vacancies/class/', views.VacancyListCreateAPIView.as_view()),
    path('vacancies/class/<int:id>/', views.VacancyRetrieveUpdateDestroyAPIView.as_view()),
]
