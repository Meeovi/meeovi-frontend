import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceUpdateManyMutationInput } from "../../../inputs/Shipping_method_priceUpdateManyMutationInput";
import { Shipping_method_priceWhereInput } from "../../../inputs/Shipping_method_priceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Shipping_method_priceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Shipping_method_priceWhereInput, {
    nullable: true
  })
  where?: Shipping_method_priceWhereInput | undefined;
}
