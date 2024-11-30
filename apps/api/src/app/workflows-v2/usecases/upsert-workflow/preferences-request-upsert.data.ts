import { WorkflowPreferences } from '@novu/shared';

export class PreferencesRequestUpsertData {
  user: WorkflowPreferences | null;
  workflow?: WorkflowPreferences | null;
}
