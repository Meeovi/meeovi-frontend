import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationCreateInput } from "../../../inputs/Shipping_method_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationCreateInput, {
    nullable: false
  })
  data!: Shipping_method_translationCreateInput;
}
