import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceWhereUniqueInput } from "../../../inputs/Shipping_method_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_priceWhereUniqueInput;
}
