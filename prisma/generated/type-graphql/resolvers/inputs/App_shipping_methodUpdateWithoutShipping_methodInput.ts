import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateOneWithoutApp_shipping_methodNestedInput } from "../inputs/AppUpdateOneWithoutApp_shipping_methodNestedInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutApp_shipping_methodNestedInput } from "../inputs/MediaUpdateOneWithoutApp_shipping_methodNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateWithoutShipping_methodInput", {})
export class App_shipping_methodUpdateWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  app_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateOneWithoutApp_shipping_methodNestedInput, {
    nullable: true
  })
  app?: AppUpdateOneWithoutApp_shipping_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutApp_shipping_methodNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutApp_shipping_methodNestedInput | undefined;
}
