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
public album: any[]=[];
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

  // public getPictures(id: any){
  //   this.galeryService.getAlbum()
  //   .subscribe((r:[])=>{
  //     console.log(id, 'num')
  //     this.album = r;
  //     console.log(this.album, 'r')
  //     if(id!=0){
  //       const datas:any[]= this.album.filter(function(d:any){
  //         console.log(d.id, 'd.id')
  //         return d.id === id;
  //       })
  //       this.album = datas;
  //       console.log(this.album, 'data')
  //     }
  //   })
  //   console.log(this.album)
  // }
  public getPictures(album: any){
    this.galeryService.getPicturesByAlbum(album)
    .subscribe({
      next: (response: any)=> {
        this.album = response
        console.log(this.album)
      }
    })
    console.log(this.album)
  }
}
