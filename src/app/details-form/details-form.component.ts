import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
  detailsForm:FormGroup;
  details: string;
  detailsform_fb:FormGroup;
  details_fb: string;
  sports=["cricket","football"]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailsForm=new FormGroup({
      Name:new FormControl(),
      School:new FormControl(),
      Address: new FormGroup({
        Street:new FormControl(),
        Landmark:new FormControl()
      }),
      Sports:new FormControl()
    
    });

    this.detailsform_fb=this.fb.group({
      Name:[""],
      School:[""],
      Address: this.fb.group({
        Street:[""],
        Landmark:[""]
      }),
      sports:["cricket"]
    });
  }
  showDetails(){
    console.log(this.detailsForm.value);
    this.details=JSON.stringify(this.detailsForm.value)
  }
  showDetails_fb(){
    console.log(this.detailsform_fb.value);
    this.details_fb=JSON.stringify(this.detailsform_fb.value)
  }

}
