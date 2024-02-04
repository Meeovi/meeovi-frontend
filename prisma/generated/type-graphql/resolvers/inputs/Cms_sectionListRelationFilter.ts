import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionWhereInput } from "../inputs/Cms_sectionWhereInput";

@TypeGraphQL.InputType("Cms_sectionListRelationFilter", {})
export class Cms_sectionListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  every?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  some?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  none?: Cms_sectionWhereInput | undefined;
}
