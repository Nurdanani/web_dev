import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading: boolean = true;
  error: string = '';
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.fetchAlbum(id);
    }
  }

  fetchAlbum(id: number): void {
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Ошибка загрузки альбома';
        this.loading = false;
      }
    });
  }

  saveChanges(): void {
    if (this.album) {
      const updatedAlbum = { ...this.album, title: this.newTitle };
      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: () => alert('Название альбома обновлено!'),
        error: () => alert('Ошибка при обновлении альбома')
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
