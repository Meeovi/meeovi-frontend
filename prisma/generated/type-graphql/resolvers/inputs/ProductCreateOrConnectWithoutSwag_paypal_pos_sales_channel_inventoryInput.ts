import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput", {})
export class ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput;
}
