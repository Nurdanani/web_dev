import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Добавили FormsModule
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;
  error: string = '';
  newAlbumTitle: string = ''; // Поле для ввода нового альбома

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  // Получение всех альбомов
  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Ошибка загрузки альбомов';
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number | undefined): void {
    if (id === undefined) return; // Проверяем, что id не undefined
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: () => {
        this.error = 'Ошибка при удалении альбома';
      }
    });
  }
  

  addAlbum(): void {
    if (!this.newAlbumTitle.trim()) return; // Проверяем, чтобы строка не была пустой
  
    const newAlbum: Album = { 
      userId: 1, // Добавляем userId, так как API требует его
      id: 0, // ID создаст API, но нужно временно задать
      title: this.newAlbumTitle
    };
  
    this.albumsService.createAlbum(newAlbum).subscribe({
      next: (album) => {
        this.albums.unshift(album); // Добавляем альбом в начало списка
        this.newAlbumTitle = ''; // Очищаем поле ввода
      },
      error: () => {
        alert('Ошибка при добавлении альбома');
      }
    });
  }
  
}
