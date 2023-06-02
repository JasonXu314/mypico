import { IsIn, IsOptional } from 'class-validator';

export type Theme = 'default';
export const THEMES = ['default'];

export class ThemeOptions {
	@IsIn(THEMES)
	@IsOptional()
	theme?: Theme;
}

