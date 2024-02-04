import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutSwag_paypal_pos_sales_channel_inventoryInput", {})
export class ProductCreateNestedOneWithoutSwag_paypal_pos_sales_channel_inventoryInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
