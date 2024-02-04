import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Mail_templateUpdateManyWithoutMail_template_typeNestedInput } from "../inputs/Mail_templateUpdateManyWithoutMail_template_typeNestedInput";
import { Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput } from "../inputs/Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Mail_template_typeUpdateInput", {})
export class Mail_template_typeUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  technical_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  available_entities?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  template_data?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateUpdateManyWithoutMail_template_typeNestedInput, {
    nullable: true
  })
  mail_template?: Mail_templateUpdateManyWithoutMail_template_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput | undefined;
}
