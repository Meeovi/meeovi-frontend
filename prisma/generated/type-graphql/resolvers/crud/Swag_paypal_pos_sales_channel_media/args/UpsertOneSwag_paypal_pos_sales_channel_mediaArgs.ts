import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaCreateInput";
import { Swag_paypal_pos_sales_channel_mediaUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaUpdateInput";
import { Swag_paypal_pos_sales_channel_mediaWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSwag_paypal_pos_sales_channel_mediaArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaCreateInput, {
    nullable: false
  })
  create!: Swag_paypal_pos_sales_channel_mediaCreateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaUpdateInput, {
    nullable: false
  })
  update!: Swag_paypal_pos_sales_channel_mediaUpdateInput;
}
