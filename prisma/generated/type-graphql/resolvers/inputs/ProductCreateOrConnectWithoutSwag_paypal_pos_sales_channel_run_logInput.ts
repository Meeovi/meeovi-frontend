import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput", {})
export class ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput;
}
