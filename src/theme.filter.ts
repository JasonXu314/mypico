import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class ThemeExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		if (exception instanceof BadRequestException && JSON.stringify(exception.getResponse()).includes('theme must be one of the following values')) {
			response
				.status(404)
				.header('Content-Type', 'application/json')
				.json({
					statusCode: 404,
					message: `Theme ${request.params.theme} does not exist`,
					error: 'Bad Request'
				});
		} else {
			response.status(400).header('Content-Type', 'application/json').json(exception.getResponse());
		}
	}
}

