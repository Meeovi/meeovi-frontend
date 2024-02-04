import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runUpdateManyMutationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runUpdateManyMutationInput";
import { Swag_paypal_pos_sales_channel_runWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_runUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_runWhereInput | undefined;
}
