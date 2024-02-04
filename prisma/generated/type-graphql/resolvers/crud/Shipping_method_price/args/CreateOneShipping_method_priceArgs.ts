import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceCreateInput } from "../../../inputs/Shipping_method_priceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceCreateInput, {
    nullable: false
  })
  data!: Shipping_method_priceCreateInput;
}
