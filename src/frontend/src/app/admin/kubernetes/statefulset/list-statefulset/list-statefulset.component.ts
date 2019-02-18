import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KubernetesNamespacedListResource } from '../../../../shared/base/kubernetes-namespaced/kubernetes-namespaced-list-resource';
import { TplDetailService } from '../../../../shared/tpl-detail/tpl-detail.service';

@Component({
  selector: 'wayne-list-statefulset',
  templateUrl: './list-statefulset.component.html'
})

export class ListStatefulsetComponent extends KubernetesNamespacedListResource {
  @Input() resources: any[];
  @Input() showState: object;

  @Output() migration = new EventEmitter<any>();

  constructor(public tplDetailService: TplDetailService) {
    super(tplDetailService);
  }

  migrationResource(obj: any) {
    this.migration.emit(obj);
  }
}
