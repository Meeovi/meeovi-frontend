import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productCreateInput";
import { Swag_paypal_pos_sales_channel_productUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productUpdateInput";
import { Swag_paypal_pos_sales_channel_productWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSwag_paypal_pos_sales_channel_productArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_productWhereUniqueInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productCreateInput, {
    nullable: false
  })
  create!: Swag_paypal_pos_sales_channel_productCreateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productUpdateInput, {
    nullable: false
  })
  update!: Swag_paypal_pos_sales_channel_productUpdateInput;
}
