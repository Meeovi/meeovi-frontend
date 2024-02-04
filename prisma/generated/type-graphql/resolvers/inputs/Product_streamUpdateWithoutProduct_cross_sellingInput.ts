import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutProduct_streamNestedInput } from "../inputs/CategoryUpdateManyWithoutProduct_streamNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_exportUpdateManyWithoutProduct_streamNestedInput } from "../inputs/Product_exportUpdateManyWithoutProduct_streamNestedInput";
import { Product_stream_filterUpdateManyWithoutProduct_streamNestedInput } from "../inputs/Product_stream_filterUpdateManyWithoutProduct_streamNestedInput";
import { Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput } from "../inputs/Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput";
import { Product_stream_translationUpdateManyWithoutProduct_streamNestedInput } from "../inputs/Product_stream_translationUpdateManyWithoutProduct_streamNestedInput";
import { Swag_paypal_pos_sales_channelUpdateManyWithoutProduct_streamNestedInput } from "../inputs/Swag_paypal_pos_sales_channelUpdateManyWithoutProduct_streamNestedInput";

@TypeGraphQL.InputType("Product_streamUpdateWithoutProduct_cross_sellingInput", {})
export class Product_streamUpdateWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  api_filter?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  invalid?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateManyWithoutProduct_streamNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  product_export?: Product_exportUpdateManyWithoutProduct_streamNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterUpdateManyWithoutProduct_streamNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationUpdateManyWithoutProduct_streamNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelUpdateManyWithoutProduct_streamNestedInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channelUpdateManyWithoutProduct_streamNestedInput | undefined;
}
