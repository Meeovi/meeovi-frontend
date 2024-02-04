import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_runWhereUniqueInput;
}
