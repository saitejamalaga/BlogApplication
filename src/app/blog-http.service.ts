import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class BlogHttpService {

  private allBlogs;
  private baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'MGQwOTE5YWEyZTQ1NGI4ZDNhMmNjNDY3YmNjNmQxMGY1OGFkZWZiZGZiYzM1MjIxZmExMjhhMGZiMjRkNDUxOTgwYmZhYzYyYzVjMzc5NjFjMWMzNzM2ZjhiOGViNWRjNWZkYTg5ZmFmZWFlOGExM2UwNzY2NzMyNGI2MDAzN2JlNw==';

  constructor(private _http: HttpClient) {

    console.log("BlogHttpService is called")
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken)
    return myResponse;
  }// end get all blogs


  getSingleBlog(blogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + blogId + '?authToken=' + this.authToken)
    return myResponse;

  }// end get single blog 

  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog



}
