import { Injectable, Injector } from '@angular/core';
import { ServicePath } from '../core/decorator/service.decorator';
import { BaseService } from '../core/service/base.service';
import { Department } from '../model/Department';

@Injectable({
  providedIn: 'root',
})
@ServicePath('Department')
export class DepartmentService extends BaseService<Department> {
  constructor(injector: Injector) {
    super(injector);
  }
}
