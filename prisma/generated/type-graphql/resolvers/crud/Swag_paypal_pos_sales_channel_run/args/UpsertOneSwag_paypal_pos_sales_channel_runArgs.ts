import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runCreateInput";
import { Swag_paypal_pos_sales_channel_runUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runUpdateInput";
import { Swag_paypal_pos_sales_channel_runWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_runWhereUniqueInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runCreateInput, {
    nullable: false
  })
  create!: Swag_paypal_pos_sales_channel_runCreateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runUpdateInput, {
    nullable: false
  })
  update!: Swag_paypal_pos_sales_channel_runUpdateInput;
}
