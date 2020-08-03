import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //+ app.module.ts에 지정

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  //readonly는 private, public, protected (접근제한자)와 같이
  //Typescript에서 제공하는 제한자다. 이름 그대로 읽기 전용이며 새 값 할당시 오류난다.
  //"쉽게 말해 프로퍼티를 위해 사용할 수 있는 const"인 것.
  //! 근데 상수는 class 바깥에다 선언하는게 더 안낫나? hooks랑 달라서 상관 없나?
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(url: string) {
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }

  post(url: string, payload: Object) {
    //console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  patch(url: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url: string) {
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
