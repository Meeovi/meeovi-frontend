import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductUpsertWithoutSwag_paypal_pos_sales_channel_run_logInput } from "../inputs/ProductUpsertWithoutSwag_paypal_pos_sales_channel_run_logInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneWithoutSwag_paypal_pos_sales_channel_run_logNestedInput", {})
export class ProductUpdateOneWithoutSwag_paypal_pos_sales_channel_run_logNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  disconnect?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  delete?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_run_logInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_run_logInput | undefined;
}
