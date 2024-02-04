import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput } from "../inputs/Product_exportCreateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput";
import { Product_exportUpdateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput } from "../inputs/Product_exportUpdateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportUpsertWithWhereUniqueWithoutSales_channel_product_export_sales_channel_idTosales_channelInput", {})
export class Product_exportUpsertWithWhereUniqueWithoutSales_channel_product_export_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_exportUpdateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  update!: Product_exportUpdateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput;

  @TypeGraphQL.Field(_type => Product_exportCreateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  create!: Product_exportCreateWithoutSales_channel_product_export_sales_channel_idTosales_channelInput;
}
