import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channel_mediaArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_mediaCreateInput;
}
