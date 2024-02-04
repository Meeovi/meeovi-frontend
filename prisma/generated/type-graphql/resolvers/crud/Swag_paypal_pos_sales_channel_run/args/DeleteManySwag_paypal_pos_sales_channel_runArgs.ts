import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_runWhereInput | undefined;
}
