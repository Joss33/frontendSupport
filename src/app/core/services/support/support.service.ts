import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Support } from './../../../core/model/support.model';
import { environment } from './../../../../environments/environment';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';

const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  constructor(private http: HttpClient) {}

  // CRUD SUPPORT Start
  // //////////////////////////////////////////////////////////////////////

  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(`${environment.url_api}/support`);
  }

  getSupport(supportID: string): Observable<Support> {
    return this.http.get<Support>(
      `${environment.url_api}/support/${supportID}`
    );
  }
  createSupport(support: Support): Observable<Support> {
    return this.http.post<Support>(
      `${environment.url_api}/support/create`,
      support
    );
  }

  deleteSupport(supportID: string): Observable<Support> {
    return this.http.delete<Support>(
      `${environment.url_api}/support/delete?supportID=${supportID}`
    );
  }

  updateSupport(supportID: string, support: Support): Observable<Support> {
    return this.http.put<Support>(
      `${environment.url_api}/support/update?supportID=${supportID}`,
      support
    );
  }
  // CRUD SUPPORT End
  // //////////////////////////////////////////////////////////////////////

  // Export to Excel Start
  // /////////////////////////////////////////////////////////////////////
  exportToExcel(json: any[], excelFileName: string): void {
    const WORKSHEET: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const WORKBOOK: XLSX.WorkBook = {
      Sheets: { data: WORKSHEET },
      SheetNames: ['data'],
    };
    const EXCELBUFFER: any = XLSX.write(WORKBOOK, {
      bookType: 'xlsx',
      type: 'array',
    });
    // call method buffer and fileName
    this.saveAsExcel(EXCELBUFFER, excelFileName);
  }
  private saveAsExcel(buffer: any, fileName: string): void {
    const DATA: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      DATA,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXT
    );
  }
  // /////////////////////////////////////////////////////////////////////
  // Export to Excel End
}
