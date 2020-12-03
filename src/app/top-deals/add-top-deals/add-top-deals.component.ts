import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-top-deals',
  templateUrl: './add-top-deals.component.html',
  styleUrls: ['./add-top-deals.component.css']
})
export class AddTopDealsComponent implements OnInit {

  
  topdealsFormRegistration:FormGroup;
  submitted = false;
  
  sname;
  mname;
  dprice;  
  date;
  atime;
  ctime;
  // bimages;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.topdealsFormRegistration = this.formbuilder.group(
      {
        
        sname:['', Validators.required],
        mname:['', Validators.required],
        dprice: ['', Validators.required],
        date: ['', Validators.required],
        atime: ['', Validators.required],
        ctime: ['', Validators.required],
        // bimages: ['', Validators.required],
    })

  }
get f() { return this.topdealsFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.topdealsFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}
