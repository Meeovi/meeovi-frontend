import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelUpdateManyMutationInput } from "../../../inputs/Swag_paypal_pos_sales_channelUpdateManyMutationInput";
import { Swag_paypal_pos_sales_channelWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channelWhereInput | undefined;
}
