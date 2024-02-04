import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartWhereInput } from "../inputs/CartWhereInput";

@TypeGraphQL.InputType("CartListRelationFilter", {})
export class CartListRelationFilter {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  every?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  some?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  none?: CartWhereInput | undefined;
}
