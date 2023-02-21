import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  constructor( private prodSrv: ProductService){}

  productFormCreate:FormGroup= new FormGroup({

    name: new FormControl("ddđ"),
    img: new FormControl("ffff")
  });
  ngOnInit():void{

  }
  onCreate(){
    // this.prodSrv.create(this.productFormCreate.value).subscribe(data => {
    //     console.log(data);
    // })
    // console.log(this.productFormCreate.value);
    this.prodSrv.onCreate(this.productFormCreate.value).subscribe(data=>{console.log(this.productFormCreate.value)});
  }
}
