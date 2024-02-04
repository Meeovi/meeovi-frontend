import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockWhereInput } from "../inputs/Cms_blockWhereInput";

@TypeGraphQL.InputType("Cms_blockListRelationFilter", {})
export class Cms_blockListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  every?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  some?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  none?: Cms_blockWhereInput | undefined;
}
