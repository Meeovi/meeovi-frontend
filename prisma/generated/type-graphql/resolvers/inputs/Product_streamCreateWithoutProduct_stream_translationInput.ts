import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutProduct_streamInput } from "../inputs/CategoryCreateNestedManyWithoutProduct_streamInput";
import { Product_cross_sellingCreateNestedManyWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateNestedManyWithoutProduct_streamInput";
import { Product_exportCreateNestedManyWithoutProduct_streamInput } from "../inputs/Product_exportCreateNestedManyWithoutProduct_streamInput";
import { Product_stream_filterCreateNestedManyWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateNestedManyWithoutProduct_streamInput";
import { Product_stream_mappingCreateNestedManyWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateNestedManyWithoutProduct_streamInput";
import { Swag_paypal_pos_sales_channelCreateNestedManyWithoutProduct_streamInput } from "../inputs/Swag_paypal_pos_sales_channelCreateNestedManyWithoutProduct_streamInput";

@TypeGraphQL.InputType("Product_streamCreateWithoutProduct_stream_translationInput", {})
export class Product_streamCreateWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  api_filter?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  invalid?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  category?: CategoryCreateNestedManyWithoutProduct_streamInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingCreateNestedManyWithoutProduct_streamInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  product_export?: Product_exportCreateNestedManyWithoutProduct_streamInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterCreateNestedManyWithoutProduct_streamInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingCreateNestedManyWithoutProduct_streamInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelCreateNestedManyWithoutProduct_streamInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channelCreateNestedManyWithoutProduct_streamInput | undefined;
}
