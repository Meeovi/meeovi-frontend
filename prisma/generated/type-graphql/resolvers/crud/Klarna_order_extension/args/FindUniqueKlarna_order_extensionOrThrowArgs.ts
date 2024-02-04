import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionWhereUniqueInput } from "../../../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKlarna_order_extensionOrThrowArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_order_extensionWhereUniqueInput;
}
