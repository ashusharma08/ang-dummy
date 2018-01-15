
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-sidebarfilter',
    templateUrl: 'app/SideBar/sidebar.component.html',

})

export class SideBarComponent implements OnInit{
    @Input() result: string = "";

    @Output() searchTextEntered = new EventEmitter<string>();

    ngOnInit() {
        
    }
    constructor() {

    }

    onClick(searchTerm: string) {
        this.searchTextEntered.emit(searchTerm);
    }
    
}