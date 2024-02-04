import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionWhereInput } from "../inputs/Klarna_order_extensionWhereInput";

@TypeGraphQL.InputType("Klarna_order_extensionListRelationFilter", {})
export class Klarna_order_extensionListRelationFilter {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  every?: Klarna_order_extensionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  some?: Klarna_order_extensionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  none?: Klarna_order_extensionWhereInput | undefined;
}
