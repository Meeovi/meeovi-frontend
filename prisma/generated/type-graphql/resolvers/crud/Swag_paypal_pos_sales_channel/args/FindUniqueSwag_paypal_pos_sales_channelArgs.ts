import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channelWhereUniqueInput;
}
