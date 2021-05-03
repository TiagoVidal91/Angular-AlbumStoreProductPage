import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import {Album} from '../album'

@Component({
  selector: 'app-track-listing',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class TrackListingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {

    return this._productService.getAlbum(1).subscribe(
      response => this.albumInfo=response)

  }

}
