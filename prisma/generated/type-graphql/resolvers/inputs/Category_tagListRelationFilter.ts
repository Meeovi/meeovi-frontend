import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagWhereInput } from "../inputs/Category_tagWhereInput";

@TypeGraphQL.InputType("Category_tagListRelationFilter", {})
export class Category_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  every?: Category_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  some?: Category_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  none?: Category_tagWhereInput | undefined;
}
