import { Controller, Get, Header, Param, UseFilters } from '@nestjs/common';
import { readFileSync } from 'fs';
import { ThemeOptions } from './options.dto';
import { ThemeExceptionFilter } from './theme.filter';

@Controller()
export class AppController {
	@Get('/')
	@Header('Content-Type', 'text/css')
	default(): string {
		return readFileSync('public/default.css').toString();
	}

	@Get('/min')
	@Header('Content-Type', 'text/css')
	defaultMin(): string {
		return readFileSync('public/default.min.css').toString();
	}

	@Get('/:theme')
	@UseFilters(ThemeExceptionFilter)
	@Header('Content-Type', 'text/css')
	themed(@Param() { theme }: ThemeOptions): string {
		return readFileSync(`public/${theme}.css`).toString();
	}

	@Get('/:theme/min')
	@UseFilters(ThemeExceptionFilter)
	@Header('Content-Type', 'text/css')
	themedMin(@Param() { theme }: ThemeOptions): string {
		return readFileSync(`public/${theme}.min.css`).toString();
	}
}

