import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  private readonly gifs = [
    "assets/images/gifs/gif1.gif",
    "assets/images/gifs/gif2.gif",
    "assets/images/gifs/gif3.gif",
    "assets/images/gifs/gif4.gif",
  ]

  protected gifSelected: string = "";
  protected isLoading: boolean = false;

  private loaderService = inject(LoaderService);
  
  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((isLoading: boolean) => {
      this.randomGif();
      this.isLoading = isLoading;
    })
  }

  private randomGif() {
    const randomIndex = Math.floor(Math.random() * this.gifs.length);
    this.gifSelected = this.gifs[randomIndex];
  }
}
