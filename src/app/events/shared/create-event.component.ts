import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
    <h1> New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create Event Form will fo here]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})

export class createEventComponent {
    constructor(private router: Router) {

    }
    cancel() {
        this.router.navigate(['/events']);
    }
}