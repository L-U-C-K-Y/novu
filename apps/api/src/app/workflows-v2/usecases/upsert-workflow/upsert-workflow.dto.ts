import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MAX_NAME_LENGTH } from '@novu/application-generic';
import { WorkflowCreationSourceEnum } from '@novu/shared';
import { UpsertStepData } from './upsert-step.data';
import { PreferencesRequestUpsertData } from './preferences-request-upsert.data';

export class UpsertWorkflowDto {
  @IsString()
  @IsOptional()
  workflowId?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpsertStepData)
  steps: UpsertStepData[];

  @IsOptional()
  @ValidateNested()
  @Type(() => PreferencesRequestUpsertData)
  preferences?: PreferencesRequestUpsertData;

  @IsString()
  @IsNotEmpty()
  @Length(1, MAX_NAME_LENGTH)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(16, { message: 'tags must contain no more than 16 elements' })
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsEnum(WorkflowCreationSourceEnum)
  __source?: WorkflowCreationSourceEnum;
}
