import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceUpdateInput } from "../../../inputs/Shipping_method_priceUpdateInput";
import { Shipping_method_priceWhereUniqueInput } from "../../../inputs/Shipping_method_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceUpdateInput, {
    nullable: false
  })
  data!: Shipping_method_priceUpdateInput;

  @TypeGraphQL.Field(_type => Shipping_method_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_priceWhereUniqueInput;
}
