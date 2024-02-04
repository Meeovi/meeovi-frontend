import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput } from "../inputs/Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput";
import { Landing_page_tagUpdateManyWithoutLanding_pageNestedInput } from "../inputs/Landing_page_tagUpdateManyWithoutLanding_pageNestedInput";
import { Landing_page_translationUpdateManyWithoutLanding_pageNestedInput } from "../inputs/Landing_page_translationUpdateManyWithoutLanding_pageNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Landing_pageUpdateWithoutCms_pageInput", {})
export class Landing_pageUpdateWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput, {
    nullable: true
  })
  landing_page_sales_channel?: Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagUpdateManyWithoutLanding_pageNestedInput, {
    nullable: true
  })
  landing_page_tag?: Landing_page_tagUpdateManyWithoutLanding_pageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationUpdateManyWithoutLanding_pageNestedInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationUpdateManyWithoutLanding_pageNestedInput | undefined;
}
