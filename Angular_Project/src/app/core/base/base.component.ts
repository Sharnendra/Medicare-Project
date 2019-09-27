import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

export class BaseComponent {

  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _commonService: CommonService
) {
    this._activatedRoute.data.subscribe(data => {
        this._commonService.headerSubject.next(data);
    });
}


}
