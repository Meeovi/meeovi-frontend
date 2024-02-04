import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionCreateInput } from "../../../inputs/Klarna_order_extensionCreateInput";
import { Klarna_order_extensionUpdateInput } from "../../../inputs/Klarna_order_extensionUpdateInput";
import { Klarna_order_extensionWhereUniqueInput } from "../../../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlarna_order_extensionArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_order_extensionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateInput, {
    nullable: false
  })
  create!: Klarna_order_extensionCreateInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionUpdateInput, {
    nullable: false
  })
  update!: Klarna_order_extensionUpdateInput;
}
