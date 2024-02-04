import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateNestedOneWithoutProduct_exportInput } from "../inputs/Product_streamCreateNestedOneWithoutProduct_exportInput";
import { Sales_channelCreateNestedOneWithoutProduct_export_product_export_sales_channel_idTosales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutProduct_export_product_export_sales_channel_idTosales_channelInput";
import { Sales_channel_domainCreateNestedOneWithoutProduct_exportInput } from "../inputs/Sales_channel_domainCreateNestedOneWithoutProduct_exportInput";

@TypeGraphQL.InputType("Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput", {})
export class Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  access_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  encoding!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_format!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  include_variants?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  generate_by_cronjob?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  generated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  interval!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_template?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body_template?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_template?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  paused_schedule?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_running?: boolean | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateNestedOneWithoutProduct_exportInput, {
    nullable: false
  })
  product_stream!: Product_streamCreateNestedOneWithoutProduct_exportInput;

  @TypeGraphQL.Field(_type => Sales_channel_domainCreateNestedOneWithoutProduct_exportInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainCreateNestedOneWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutProduct_export_product_export_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  sales_channel_product_export_sales_channel_idTosales_channel!: Sales_channelCreateNestedOneWithoutProduct_export_product_export_sales_channel_idTosales_channelInput;
}
