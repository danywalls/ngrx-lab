import {createAction, props} from '@ngrx/store';

export const saveColorAction = createAction('[SETTINGS] Save Color', props<{ colorName: string, url: string }>())
