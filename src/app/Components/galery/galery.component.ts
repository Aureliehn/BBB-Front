import { Component, OnInit } from '@angular/core';
import { BBB } from 'src/app/bbb';
import { GaleryService } from 'src/app/Services/galery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
public albums: BBB.album[]
  constructor(
    private galeryService: GaleryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAlbum()
  }

  public getAllAlbum(){
    this.galeryService.getAlbum()
    .subscribe((r:[])=>{
      this.albums = r
    })
  }

  public goToDetail(id:number){
    this.router.navigateByUrl(`galerie/${id}`)
  }
}
