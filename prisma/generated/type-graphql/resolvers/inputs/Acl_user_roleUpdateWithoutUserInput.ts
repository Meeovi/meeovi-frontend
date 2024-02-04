import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput } from "../inputs/Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Acl_user_roleUpdateWithoutUserInput", {})
export class Acl_user_roleUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput, {
    nullable: true
  })
  acl_role?: Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput | undefined;
}
