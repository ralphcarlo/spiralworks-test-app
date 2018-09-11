import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
       <div class="jumbotron">
           <div class="container">
               <div class="row">
                   <div class="col-sm-6 offset-sm-3">
                       <alert></alert>
                       <router-outlet></router-outlet>
                   </div>
               </div>
           </div>
       </div>
     `
})

export class AppComponent { }
