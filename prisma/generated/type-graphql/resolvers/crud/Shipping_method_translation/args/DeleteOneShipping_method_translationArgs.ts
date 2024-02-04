import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationWhereUniqueInput } from "../../../inputs/Shipping_method_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_translationWhereUniqueInput;
}
