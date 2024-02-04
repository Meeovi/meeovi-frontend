import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockWhereInput } from "../inputs/App_cms_blockWhereInput";

@TypeGraphQL.InputType("App_cms_blockRelationFilter", {})
export class App_cms_blockRelationFilter {
  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  is?: App_cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  isNot?: App_cms_blockWhereInput | undefined;
}
