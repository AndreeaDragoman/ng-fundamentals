import { createEventComponent } from "../events/shared/create-event.component";
import { EventDetailsComponent } from "../events/event-details/event-details.component";
import { EventsListComponent } from "../events/events-list.component";
import { Error404Component } from "../errors/404.component";
import { EventRouteActivator } from "../events/event-details/event-route-activator.service";

export const appRoutes = [
    {path: 'events/new', component: createEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    {path: '404', component: Error404Component},
    {path: '', redirectTo:'/events', pathMatch: 'full'}
]