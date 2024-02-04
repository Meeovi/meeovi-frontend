import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockWhereInput } from "../inputs/Cms_blockWhereInput";

@TypeGraphQL.InputType("Cms_blockRelationFilter", {})
export class Cms_blockRelationFilter {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  is?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  isNot?: Cms_blockWhereInput | undefined;
}
