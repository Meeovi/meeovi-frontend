import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutApp_shipping_methodNestedInput } from "../inputs/MediaUpdateOneWithoutApp_shipping_methodNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Shipping_methodUpdateOneRequiredWithoutApp_shipping_methodNestedInput } from "../inputs/Shipping_methodUpdateOneRequiredWithoutApp_shipping_methodNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateWithoutAppInput", {})
export class App_shipping_methodUpdateWithoutAppInput {
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

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutApp_shipping_methodNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutApp_shipping_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodUpdateOneRequiredWithoutApp_shipping_methodNestedInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodUpdateOneRequiredWithoutApp_shipping_methodNestedInput | undefined;
}
