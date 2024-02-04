import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Mail_template_mediaUpdateManyWithoutMail_templateNestedInput } from "../inputs/Mail_template_mediaUpdateManyWithoutMail_templateNestedInput";
import { Mail_template_translationUpdateManyWithoutMail_templateNestedInput } from "../inputs/Mail_template_translationUpdateManyWithoutMail_templateNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Mail_templateUpdateWithoutMail_template_typeInput", {})
export class Mail_templateUpdateWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  system_default?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateManyWithoutMail_templateNestedInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaUpdateManyWithoutMail_templateNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateManyWithoutMail_templateNestedInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationUpdateManyWithoutMail_templateNestedInput | undefined;
}
