import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSwag_paypal_pos_sales_channel_productOrThrowArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_productWhereUniqueInput;
}
