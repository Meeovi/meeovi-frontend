import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryUpdateManyMutationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryUpdateManyMutationInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_inventoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_inventoryWhereInput | undefined;
}
