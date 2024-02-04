import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodWhereUniqueInput } from "../../../inputs/Shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_methodWhereUniqueInput;
}
