import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/global/global';
import { GaleryService } from 'src/app/Services/galery.service';

@Component({
  selector: 'app-galery-detail',
  templateUrl: './galery-detail.component.html',
  styleUrls: ['./galery-detail.component.css']
})
export class GaleryDetailComponent implements OnInit {
  public idAlbum: any;
  public album: any;
  public pictures : any;

  constructor(
    private route: ActivatedRoute,
    private galeryService: GaleryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        this.idAlbum = data.id;
        this.getPictures(this.idAlbum);
      }
    );
  }
// ANCHOR
  public getPictures(album: any) {
    this.galeryService.getPicturesByAlbum(album)
      .subscribe({
        next: (response: any) => {
          this.album = response;
          this.album.photos = this.album.photos.map(d => {
            return {
              ...d,
              img: `http://localhost:8000/${d.img}`
            };
          });
        }
      });
  }
}
