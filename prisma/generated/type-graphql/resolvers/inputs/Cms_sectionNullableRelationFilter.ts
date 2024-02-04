import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionWhereInput } from "../inputs/Cms_sectionWhereInput";

@TypeGraphQL.InputType("Cms_sectionNullableRelationFilter", {})
export class Cms_sectionNullableRelationFilter {
  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  is?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  isNot?: Cms_sectionWhereInput | undefined;
}
