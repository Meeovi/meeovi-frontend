import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductUpdateWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput", {})
export class ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutSwag_paypal_pos_sales_channel_inventoryInput;
}
