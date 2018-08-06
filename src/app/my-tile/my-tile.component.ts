import { Component, OnInit } from '@angular/core';
import { AddinClient } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  private client: any;
  constructor() {}

  public ngOnInit() {
    this.client = new AddinClient({
      callbacks: {
        init: (args) => {
          args.ready({ showUI: true, title: 'My tile' });
        }
      }
    });
  }
}
