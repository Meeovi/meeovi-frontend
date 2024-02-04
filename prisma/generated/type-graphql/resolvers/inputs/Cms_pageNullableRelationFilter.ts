import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageNullableRelationFilter", {})
export class Cms_pageNullableRelationFilter {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  is?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  isNot?: Cms_pageWhereInput | undefined;
}
