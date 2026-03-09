/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { IndexRoutes } from "./app/routes";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";
import { envVars } from "./app/config/env";
import cors from "cors";
import path from "path";
import qs from 'qs';
import cron from "node-cron";
import { AppointmentService } from "./app/module/appointment/appointment.service";

const app: Application = express();
app.set("query parser", (str : string) => qs.parse(str));

app.set("view engine", "ejs");
app.set("views",path.resolve(process.cwd(), `src/app/templates`));

app.use(cors({
    origin : [envVars.FRONTEND_URL, envVars.BETTER_AUTH_URL, "http://localhost:3000", "http://localhost:5000"],
    credentials : true,
    methods : ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders : ["Content-Type", "Authorization"]
}))


app.use("/api/auth", toNodeHandler(auth));

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

cron.schedule("*/25 * * * *", async () => {
    try {
        console.log("Running cron job to cancel unpaid appointments...");
        await AppointmentService.cancelUnpaidAppointments();
    } catch (error : any) {
        console.error("Error occurred while canceling unpaid appointments:", error.message);    
    }
})

app.use("/api/v1", IndexRoutes);

// Basic route
app.get('/', async (req: Request, res: Response) => {
    res.status(201).json({
        success: true,
        message: 'API is working',
    })
});

app.use(globalErrorHandler);
app.use(notFound);


export default app;