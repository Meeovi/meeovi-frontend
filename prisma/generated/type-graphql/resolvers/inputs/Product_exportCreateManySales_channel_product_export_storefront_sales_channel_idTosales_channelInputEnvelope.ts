import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInput } from "../inputs/Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInput";

@TypeGraphQL.InputType("Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope", {})
export class Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInput], {
    nullable: false
  })
  data!: Product_exportCreateManySales_channel_product_export_storefront_sales_channel_idTosales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
