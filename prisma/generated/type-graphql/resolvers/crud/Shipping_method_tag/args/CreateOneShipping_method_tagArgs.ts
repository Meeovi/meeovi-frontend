import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagCreateInput } from "../../../inputs/Shipping_method_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagCreateInput, {
    nullable: false
  })
  data!: Shipping_method_tagCreateInput;
}
