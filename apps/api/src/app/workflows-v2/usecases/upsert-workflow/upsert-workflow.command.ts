import { EnvironmentWithUserObjectCommand } from '@novu/application-generic';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpsertWorkflowDto } from './upsert-workflow.dto';

export class UpsertWorkflowCommand extends EnvironmentWithUserObjectCommand {
  @IsOptional()
  @IsString()
  workflowIdOrInternalId?: string;

  @ValidateNested()
  @Type(() => UpsertWorkflowDto)
  workflowDto: UpsertWorkflowDto;
}
