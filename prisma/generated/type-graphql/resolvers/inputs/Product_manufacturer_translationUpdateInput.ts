import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_manufacturerUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput } from "../inputs/Product_manufacturerUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput";

@TypeGraphQL.InputType("Product_manufacturer_translationUpdateInput", {})
export class Product_manufacturer_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput | undefined;
}
