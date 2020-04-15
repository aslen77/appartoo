import { Component, OnInit } from '@angular/core';
import { PangolinService } from '../shared/pangolin.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Pangolin } from '../shared/pangolin.model';


declare var M : any ;
@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css'],
  providers : [PangolinService]
})
export class PangolinComponent {

  constructor(public pangolinService : PangolinService, public router: Router) { }

  ngOnInit(): void {
   this.resetForm();
   this.loadPangolinList();
  }


resetForm(form?: NgForm ){ 
  if (form)
  form.reset(); 
  this.pangolinService.selectedPangolin = { 
    _id: "",
    age: null,
    famille : "", 
    race: "", 
    nourriture: ""
  }
}

onSubmit(form : NgForm){ 
  if ( form.controls['age'].value == "" ||form.controls['famille'].value == "" ||form.controls['race'].value == "" || form.controls['nourriture'].value == "")
alert("error");
  
  else 
  {
    this.pangolinService.postPangolin(form.value).subscribe((res)=> {
      this.resetForm(); 
      M.toast({ html : 'Enregistrement effectué !', classes : 'rounded'});
    });
  }

    
  }
  

loadPangolinList() { 
  this.pangolinService.getpangolinList().subscribe((res)=> {
    this.pangolinService.pangolins = res as Pangolin[];
  })
}


onEdit(pang : Pangolin){ 
  this.pangolinService.selectedPangolin = pang;
}

onDelete (_id: string , form: NgForm){ 
    if (confirm('êtes-vous sûr de voulir supprimer ce pangolin ?') == true ){
      this.pangolinService.deletePangolin(_id).subscribe((res)=> {
        M.toast({ html : 'suppression effectuée ! ', classes : 'rounded'});
        this.loadPangolinList();
        this.resetForm(form);
     
      });
    }
}

navigateToLogin() {
  this.router.navigateByUrl('');
}
}
