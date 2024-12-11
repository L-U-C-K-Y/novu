import { ChannelTypeEnum } from '@novu/shared';
import { IsBoolean, IsInstance, IsObject, IsOptional, ValidateNested } from 'class-validator';

export class ChannelPreferenceData {
  @IsBoolean()
  enabled: boolean;
}

export class WorkflowPreferenceData {
  @IsBoolean()
  enabled: boolean;

  @IsBoolean()
  readOnly: boolean;
}

export class WorkflowPreferencesUpsertData {
  @ValidateNested()
  @IsInstance(WorkflowPreferenceData)
  all: WorkflowPreferenceData;

  @IsObject()
  @ValidateNested({ each: true })
  channels: Record<ChannelTypeEnum, ChannelPreferenceData>;
}

export class PreferencesRequestUpsertDataCommand {
  @IsOptional()
  @ValidateNested()
  @IsInstance(WorkflowPreferencesUpsertData)
  user: WorkflowPreferencesUpsertData | null;

  @IsOptional()
  @ValidateNested()
  @IsInstance(WorkflowPreferencesUpsertData)
  workflow?: WorkflowPreferencesUpsertData | null;
}
