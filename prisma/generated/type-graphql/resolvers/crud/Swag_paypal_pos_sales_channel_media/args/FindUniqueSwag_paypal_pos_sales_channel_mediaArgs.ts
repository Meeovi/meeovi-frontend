import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSwag_paypal_pos_sales_channel_mediaArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_mediaWhereUniqueInput;
}
