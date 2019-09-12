import { RouterEffects } from './router.effects';
import { UiEffects } from './ui.effects';

export const Effects: any[] = [
  RouterEffects,
  UiEffects
];

export * from './router.effects';
export * from './ui.effects';
