import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-ele-ref',
  templateUrl: './td-ele-ref.component.html',
  styleUrls: ['./td-ele-ref.component.scss']
})
export class TDEleRefComponent implements OnInit {
  public bydefaultCourse='angular';

  @ViewChild('signUpform') signUpform !: NgForm;
  // public form = {
  //   name :'',
  //   email:'',
  //   selectOption:'',
  //   select:{
  //     moc:'byMail',
  //     moc1:'byContact'
  //   },
  //   check: 'Notify me'

  // }
  constructor() { }

  ngOnInit(): void {
  }
  signIntoForm(){
    console.log(this.signUpform);
    this.signUpform.reset();

   
  }
 

 

}
