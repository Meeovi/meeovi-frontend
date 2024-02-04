import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationWhereInput } from "../inputs/Category_translationWhereInput";

@TypeGraphQL.InputType("Category_translationListRelationFilter", {})
export class Category_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  every?: Category_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  some?: Category_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  none?: Category_translationWhereInput | undefined;
}
