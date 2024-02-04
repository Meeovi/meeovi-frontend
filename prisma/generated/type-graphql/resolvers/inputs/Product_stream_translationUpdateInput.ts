import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_streamUpdateOneRequiredWithoutProduct_stream_translationNestedInput } from "../inputs/Product_streamUpdateOneRequiredWithoutProduct_stream_translationNestedInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateInput", {})
export class Product_stream_translationUpdateInput {
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

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateOneRequiredWithoutProduct_stream_translationNestedInput, {
    nullable: true
  })
  product_stream?: Product_streamUpdateOneRequiredWithoutProduct_stream_translationNestedInput | undefined;
}
