import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageListRelationFilter", {})
export class Cms_pageListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  every?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  some?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  none?: Cms_pageWhereInput | undefined;
}
