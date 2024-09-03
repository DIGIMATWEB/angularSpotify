import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent implements OnInit{
  mockTrakcList: Array<TrackModel> = [
  ]
   ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTrakcList=data;
     console.log(data.data)
   }
}
