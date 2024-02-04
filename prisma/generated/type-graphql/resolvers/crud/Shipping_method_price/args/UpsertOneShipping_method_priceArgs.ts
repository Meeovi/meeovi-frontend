import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceCreateInput } from "../../../inputs/Shipping_method_priceCreateInput";
import { Shipping_method_priceUpdateInput } from "../../../inputs/Shipping_method_priceUpdateInput";
import { Shipping_method_priceWhereUniqueInput } from "../../../inputs/Shipping_method_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Shipping_method_priceCreateInput, {
    nullable: false
  })
  create!: Shipping_method_priceCreateInput;

  @TypeGraphQL.Field(_type => Shipping_method_priceUpdateInput, {
    nullable: false
  })
  update!: Shipping_method_priceUpdateInput;
}
