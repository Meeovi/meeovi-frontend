import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagWhereUniqueInput } from "../../../inputs/Shipping_method_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShipping_method_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_tagWhereUniqueInput;
}
