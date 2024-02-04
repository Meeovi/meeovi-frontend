import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAcl_user_roleNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAcl_user_roleNestedInput";

@TypeGraphQL.InputType("Acl_user_roleUpdateWithoutAcl_roleInput", {})
export class Acl_user_roleUpdateWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAcl_user_roleNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAcl_user_roleNestedInput | undefined;
}
