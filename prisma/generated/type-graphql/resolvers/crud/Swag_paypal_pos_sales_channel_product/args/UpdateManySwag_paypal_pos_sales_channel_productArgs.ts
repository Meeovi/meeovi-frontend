import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productUpdateManyMutationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productUpdateManyMutationInput";
import { Swag_paypal_pos_sales_channel_productWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_paypal_pos_sales_channel_productArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_productUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_productWhereInput | undefined;
}
