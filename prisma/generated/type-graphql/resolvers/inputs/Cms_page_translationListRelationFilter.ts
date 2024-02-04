import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationWhereInput } from "../inputs/Cms_page_translationWhereInput";

@TypeGraphQL.InputType("Cms_page_translationListRelationFilter", {})
export class Cms_page_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  every?: Cms_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  some?: Cms_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  none?: Cms_page_translationWhereInput | undefined;
}
