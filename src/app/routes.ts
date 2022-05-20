import {
    createEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionCompoenent
} from './events/index'
import { Error404Component } from "./errors/404.component";


export const appRoutes = [
    {path: 'events/new', component: createEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent, resolve: {events:EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    {path: 'events/session/new', component: CreateSessionCompoenent },
    {path: '404', component: Error404Component},
    {path: '', redirectTo:'/events', pathMatch: 'full'},
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
]