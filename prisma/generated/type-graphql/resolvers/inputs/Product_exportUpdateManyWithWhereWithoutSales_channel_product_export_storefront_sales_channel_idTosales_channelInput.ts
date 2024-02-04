import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportScalarWhereInput } from "../inputs/Product_exportScalarWhereInput";
import { Product_exportUpdateManyMutationInput } from "../inputs/Product_exportUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_exportUpdateManyWithWhereWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput", {})
export class Product_exportUpdateManyWithWhereWithoutSales_channel_product_export_storefront_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => Product_exportScalarWhereInput, {
    nullable: false
  })
  where!: Product_exportScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_exportUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_exportUpdateManyMutationInput;
}
