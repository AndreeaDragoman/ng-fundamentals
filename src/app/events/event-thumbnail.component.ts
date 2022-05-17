import { Component, Input, Output,EventEmitter } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div>Time: {{event?.time}}</div>
        <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
              Online URL: {{event?.onlineUrl}}
            </div>
         </div> 
    </div>
    `
    ,
    styles:[`
    .thumbnail {min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent | undefined;

    getStartTimeStyle():any {
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
}