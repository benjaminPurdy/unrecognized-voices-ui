import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../services/authentication-api.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.less'],
	providers: [AuthenticationService]
})

export class AuthenticateComponent {
    localUser = {
        username: '',
        password: ''
    }

    constructor(private _service: AuthenticationService, private _router: Router) {

    }

    login() {
        this._service.login(this.localUser).then((res) => {
            if(res)
            this._router.navigate(['Dashboard']);
            else
            console.log(res);
        })
    }

    clearfields() {
        this.localUser.username = '';
        this.localUser.password = '';
    }


}
