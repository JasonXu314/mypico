import { IsIn, IsOptional } from 'class-validator';

export type Theme = 'default' | 'techno';
export const THEMES = ['default', 'techno'];

export class ThemeOptions {
	@IsIn(THEMES)
	@IsOptional()
	theme?: Theme;
}

