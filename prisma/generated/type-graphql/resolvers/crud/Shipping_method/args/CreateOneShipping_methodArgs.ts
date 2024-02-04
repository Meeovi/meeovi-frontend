import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodCreateInput } from "../../../inputs/Shipping_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodCreateInput, {
    nullable: false
  })
  data!: Shipping_methodCreateInput;
}
