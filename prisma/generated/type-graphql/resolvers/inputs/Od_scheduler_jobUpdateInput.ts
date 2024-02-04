import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput } from "../inputs/Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput";
import { Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput } from "../inputs/Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput";
import { Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput } from "../inputs/Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateInput", {})
export class Od_scheduler_jobUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  started_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  finished_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput, {
    nullable: true
  })
  od_scheduler_job?: Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput, {
    nullable: true
  })
  other_od_scheduler_job?: Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput, {
    nullable: true
  })
  od_scheduler_job_message?: Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput | undefined;
}
