import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../shared/user.model';


declare var M : any ;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [UserService]
})
export class UserComponent {

  constructor(public userService : UserService , private router: Router) { }

  ngOnInit(): void {
   this.resetForm();
  }


resetForm(form?: NgForm ){ 
  if (form)
  form.reset(); 
  this.userService.selectedUser = { 
    _id: "",
    email : "", 
    password: ""
  }
}

inscription(form : NgForm){ 
  if ( form.controls['email'].value == "" ||form.controls['password'].value == ""){
    alert("veuillez saisir le Login et le mot de passe ");
  }
  else {
    this.userService.postUser(form.value).subscribe((res)=> {
      this.resetForm(); 
      M.toast({ html : 'Enregistrement effectué !', classes : 'rounded'});
    });
  
  }
}

// loadUserList() { 
//   this.userService.getUserList().subscribe((res)=> {
//     this.userService.users = res as User[];
//   })
// }

loginUserData = {}

authentifier(form :NgForm){ 

  this.userService.getUserList().subscribe((res)=> { 
    this.userService.users = res as User[]

var verificateur = 0 ; 
var Userr = this.userService.users
for (let i = 0 ; i<Userr.length ; i++ ){
  let LoginDB = Userr[i].email;
  let passwordDB = Userr[i].password;
  if ( form.controls['email'].value == LoginDB && form.controls['password'].value == passwordDB){
   verificateur = 1;
    alert("Connexion réussite ! Bienvenue "); 
    this.router.navigateByUrl('/pangolins');
      break;
  }
  
  
}
if (verificateur == 0 ) {
  alert("erreur de connexion");
}
  });
  // if ( form.controls['email'].value == AuthBD && form.controls['password'].value == MdpBD){
  //   alert("  connexion Bonne  ! ");
  //   this.router.navigateByUrl('/pangolins');
  // }
  // else 
  // {
  //   alert("erreur de connexion");
   

  }

}




