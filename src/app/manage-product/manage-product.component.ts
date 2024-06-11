import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'productName': new FormControl("null", Validators.required),
      'productCode': new FormControl("null", [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit(){
    console.log("Product Form:", this.productForm.controls.productName.valid);
    
  }

}
