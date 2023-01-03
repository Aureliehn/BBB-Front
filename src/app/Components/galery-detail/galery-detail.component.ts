import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleryService } from 'src/app/Services/galery.service';

@Component({
  selector: 'app-galery-detail',
  templateUrl: './galery-detail.component.html',
  styleUrls: ['./galery-detail.component.css']
})
export class GaleryDetailComponent implements OnInit {
public idAlbum: any
public album: any;
public pictures : any
  constructor(
    private route: ActivatedRoute,
    private galeryService: GaleryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) =>{
        console.log(data.id,'id')
        this.idAlbum = data.id
        this.getPictures(this.idAlbum)
      }
    )
  }

  public getPictures(album: any){
    console.log(album, 'alb recue')
    this.galeryService.getPicturesByAlbum(album)
    .subscribe({
      next: (response: any)=> {
        this.album = response
        console.log(this.album, 'this.album')
      }
    })
    console.log(this.album, 'csl2')
  }
}
