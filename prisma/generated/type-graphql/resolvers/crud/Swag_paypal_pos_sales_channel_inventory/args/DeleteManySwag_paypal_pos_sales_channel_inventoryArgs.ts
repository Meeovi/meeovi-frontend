import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_inventoryWhereInput | undefined;
}
