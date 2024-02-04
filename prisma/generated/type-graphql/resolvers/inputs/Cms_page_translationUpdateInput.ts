import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput } from "../inputs/Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Cms_page_translationUpdateInput", {})
export class Cms_page_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput, {
    nullable: true
  })
  cms_page?: Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput | undefined;
}
