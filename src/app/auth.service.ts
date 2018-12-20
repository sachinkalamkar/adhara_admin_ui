import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  salondetails :any=[];
  constructor(private http:HttpClient) { }

  registerSalon(salondetails){
   return this.http.post('http://127.0.0.1:4003/request',salondetails);
  }

   getSalonById(_id: String) {
    console.log(_id);
    return this.http.post(`http://127.0.0.1:4003/requestResponse/` ,{_id});
  }
 

  updateUser(salondetails) {
    return this.http.post(`http://127.0.0.1:4003/updateDetail`+ '/' + salondetails.id, salondetails);
  }

  deleteUser(_id: String) {
    console.log(_id);
    return this.http.post(`http://127.0.0.1:4003/rejectRequest/`, {_id});
   
  }
  
}
