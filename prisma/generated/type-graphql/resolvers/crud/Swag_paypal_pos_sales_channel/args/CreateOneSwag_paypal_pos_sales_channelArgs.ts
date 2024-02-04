import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channelCreateInput;
}
