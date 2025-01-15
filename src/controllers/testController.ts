import express from "express";
import {
    Controller,
    Route,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Request,
    Response,
    Path,
    Query,
    UploadedFile,
} from 'tsoa';

import { Greeting, GreetingCreate } from "../greeting/greeting";
import { GreetingService } from "../greeting/greetingService";

@Route('/api/greeting')
export class TestController extends Controller {

    /**
     * Get all of the stored greetings.
     *
     * @param req Express request object
     *
     * @returns An array of Greeting objects
     */
    @Get('/')
    public async getAllGreetings(
        @Request() req: express.Request
    ): Promise<Greeting[]> {
        return GreetingService.getInstance().getAll();
    }

    /**
     * Get a greeting message for the world.
     *
     * @param req Express request object
     * @param greetingId Id of Greeting to retrieve
     *
     * @returns A Greeting object
     */
    @Response(404, "Greeting not found")
    @Get('{greetingId}')
    public async getGreeting(
        @Path() greetingId: string
    ): Promise<Greeting> {
        const greeting = GreetingService.getInstance().getById(greetingId);
        if (!greeting) {
            this.setStatus(404);
            return {} as any;
        }
        return greeting;
    }

    /**
     * Create and store a greeting for the world.
     *
     * @param req Express request object
     * @param greeting GreetingCreate object to store
     *
     */
    @Post()
    public async createGreeting(
        @Request() req: express.Request,
        @Body() body: GreetingCreate
    ): Promise<Greeting> {
        return GreetingService.getInstance().create(body);
    }

}
