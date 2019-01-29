import {Component} from '@angular/core';

@Component({
    selector:'app-demo',
    template:`
    <div>
    <input type="button" disabled = '{{isdisabled}}' value="Submit">
    </div>
    `
})
export class DemoComponent{
    isdisabled = false;

}