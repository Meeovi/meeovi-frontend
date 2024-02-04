import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_run_logOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channel_run_logScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channel_run_logWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logWhereInput";
import { Swag_paypal_pos_sales_channel_run_logScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_run_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channel_run_logArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_run_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_run_logOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_run_logOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_run_logScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "run_id" | "level" | "message" | "product_id" | "product_version_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channel_run_logScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
