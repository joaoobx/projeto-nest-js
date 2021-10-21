import { Controller, Post } from "@nestjs/common";
import { request } from "express";

@Controller("users")
export class UsersController {
  constructor() {}

  @Post()
  addNewUser() {
    return request.body();
  }
}
