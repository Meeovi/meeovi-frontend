import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_run_logUpdateManyMutationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logUpdateManyMutationInput";
import { Swag_paypal_pos_sales_channel_run_logWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_paypal_pos_sales_channel_run_logArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_run_logUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_run_logWhereInput | undefined;
}
