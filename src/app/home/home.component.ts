import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "../_models";
import { UserService } from "../_services";

@Component({template: `
    <h1>Welcome, {{currentUser.firstName}}!</h1>
    <p>You have successfully logged in!</p>
    <h3>Here are the current members of this page:</h3>
    <ul>
        <li *ngFor="let user of users">
            {{user.username}} ({{user.firstName}} {{user.lastName}})
            - <a (click)="deleteUser(user.id)" class="text-danger">Delete</a>
        </li>
    </ul>
    <p><a [routerLink]="['/login']">Logout</a></p>
`})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
