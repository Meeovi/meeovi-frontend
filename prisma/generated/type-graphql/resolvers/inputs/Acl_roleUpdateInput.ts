import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleUpdateManyWithoutAcl_roleNestedInput } from "../inputs/Acl_user_roleUpdateManyWithoutAcl_roleNestedInput";
import { AppUpdateManyWithoutAcl_roleNestedInput } from "../inputs/AppUpdateManyWithoutAcl_roleNestedInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Integration_roleUpdateManyWithoutAcl_roleNestedInput } from "../inputs/Integration_roleUpdateManyWithoutAcl_roleNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Acl_roleUpdateInput", {})
export class Acl_roleUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  privileges?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deleted_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleUpdateManyWithoutAcl_roleNestedInput, {
    nullable: true
  })
  acl_user_role?: Acl_user_roleUpdateManyWithoutAcl_roleNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateManyWithoutAcl_roleNestedInput, {
    nullable: true
  })
  app?: AppUpdateManyWithoutAcl_roleNestedInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleUpdateManyWithoutAcl_roleNestedInput, {
    nullable: true
  })
  integration_role?: Integration_roleUpdateManyWithoutAcl_roleNestedInput | undefined;
}
