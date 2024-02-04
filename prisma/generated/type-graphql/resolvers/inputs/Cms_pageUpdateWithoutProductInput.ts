import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutCms_pageNestedInput } from "../inputs/CategoryUpdateManyWithoutCms_pageNestedInput";
import { Cms_page_translationUpdateManyWithoutCms_pageNestedInput } from "../inputs/Cms_page_translationUpdateManyWithoutCms_pageNestedInput";
import { Cms_sectionUpdateManyWithoutCms_pageNestedInput } from "../inputs/Cms_sectionUpdateManyWithoutCms_pageNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Landing_pageUpdateManyWithoutCms_pageNestedInput } from "../inputs/Landing_pageUpdateManyWithoutCms_pageNestedInput";
import { MediaUpdateOneWithoutCms_pageNestedInput } from "../inputs/MediaUpdateOneWithoutCms_pageNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Sales_channelUpdateManyWithoutCms_pageNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCms_pageNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Cms_pageUpdateWithoutProductInput", {})
export class Cms_pageUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  entity?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  css_class?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutCms_pageNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateManyWithoutCms_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutCms_pageNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutCms_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateManyWithoutCms_pageNestedInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationUpdateManyWithoutCms_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateManyWithoutCms_pageNestedInput, {
    nullable: true
  })
  cms_section?: Cms_sectionUpdateManyWithoutCms_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpdateManyWithoutCms_pageNestedInput, {
    nullable: true
  })
  landing_page?: Landing_pageUpdateManyWithoutCms_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCms_pageNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateManyWithoutCms_pageNestedInput | undefined;
}
