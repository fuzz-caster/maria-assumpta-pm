import { Controller, Get, Inject } from '@nestjs/common';
import { ProfileMatchingService } from "./pm.service";

@Controller("api/v1/profile-matching")
export class ProfileMatchingController {

  constructor (
    private readonly pmService: ProfileMatchingService
  ) {}

  @Get("run")
  async run () {
    return this.pmService.run();
  }
}