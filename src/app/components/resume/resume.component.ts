import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/pdf.service';
declare const PDFObject: any;
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfData : any;
  pdfObject : any;
  isLoading :any = false;
  constructor(private pdfService: PdfService, private router : Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pdfService.getPdf().subscribe({
      next: (res) => {
        this.pdfData = res;
        this.isLoading = false;
        if (this.pdfData) {
          this.handleRenderPdf(this.pdfData);
        }
      },
    });
  }

  handleRenderPdf(data:any) {
    this.pdfObject = PDFObject.embed(data, '#pdfContainer');
  }
  goBack(){
    this.router.navigate(['/otherSkills']);
  }

  goNext(){
    this.router.navigate(['/contactMe']);
  }
}
