import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channel_runScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channel_runWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereInput";
import { Swag_paypal_pos_sales_channel_runScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_runScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_runWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_runOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_runOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_runScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sales_channel_id" | "task" | "created_at" | "updated_at" | "finished_at" | "status" | "message_count" | "step_index" | "steps">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channel_runScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
