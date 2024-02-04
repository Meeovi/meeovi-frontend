import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionCreateInput } from "../../../inputs/Klarna_order_extensionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlarna_order_extensionArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateInput, {
    nullable: false
  })
  data!: Klarna_order_extensionCreateInput;
}
