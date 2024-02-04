import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutSwag_paypal_pos_sales_channel_run_logInput", {})
export class ProductCreateNestedOneWithoutSwag_paypal_pos_sales_channel_run_logInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
