import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryUpdateInput", {})
export class Product_keyword_dictionaryUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  keyword?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reversed?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput | undefined;
}
