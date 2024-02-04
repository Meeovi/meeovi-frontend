import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope } from "../inputs/Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope";
import { Product_exportCreateOrConnectWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput } from "../inputs/Product_exportCreateOrConnectWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput";
import { Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput } from "../inputs/Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportCreateNestedManyWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput", {})
export class Product_exportCreateNestedManyWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => [Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  create?: Product_exportCreateWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportCreateOrConnectWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Product_exportCreateOrConnectWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_exportWhereUniqueInput[] | undefined;
}
