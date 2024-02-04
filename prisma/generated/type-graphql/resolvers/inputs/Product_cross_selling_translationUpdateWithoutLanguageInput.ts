import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput } from "../inputs/Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput";

@TypeGraphQL.InputType("Product_cross_selling_translationUpdateWithoutLanguageInput", {})
export class Product_cross_selling_translationUpdateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput | undefined;
}
