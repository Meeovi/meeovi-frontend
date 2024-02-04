import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_sortingUpdateOneRequiredWithoutProduct_sorting_translationNestedInput } from "../inputs/Product_sortingUpdateOneRequiredWithoutProduct_sorting_translationNestedInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateInput", {})
export class Product_sorting_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingUpdateOneRequiredWithoutProduct_sorting_translationNestedInput, {
    nullable: true
  })
  product_sorting?: Product_sortingUpdateOneRequiredWithoutProduct_sorting_translationNestedInput | undefined;
}
