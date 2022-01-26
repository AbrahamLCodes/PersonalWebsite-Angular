import { Component, OnInit, TemplateRef } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class HeaderComponent implements OnInit {

  public lang: any;
  public modalRef: BsModalRef

  constructor(
    private language: LanguageService,
    private modalService: BsModalService
  ) {
    this.lang = language.languageSelected;
    language.lang.subscribe(value => {
      this.lang = value;
    })
  }

  public ngOnInit(): void {
  }

  public mostrarModal(template: TemplateRef<any>): void {
    if (this.modalRef) { //Por si el modal ha sido abierto
      this.cerrarModal();
    }
    this.modalRef = this.modalService.show(template);
  }

  public cerrarModal(): void {
    this.modalRef.hide()
  }

  public downloadCV(option: number): void {
    let link = document.createElement("a");
    switch (option) {
      case 1:
        link.download = "Abraham Luna - CV - ES.pdf";
        link.href = "../../../assets/Abraham Luna - CV - ES.pdf";
        break;
      case 2:
        link.download = "Abraham Luna - CV - EN.pdf";
        link.href = "../../../assets/Abraham Luna - CV - EN.pdf";
        break;
    }
    link.click();
    this.cerrarModal();
  }

}
