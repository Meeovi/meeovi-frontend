import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationWhereInput } from "../inputs/App_cms_block_translationWhereInput";

@TypeGraphQL.InputType("App_cms_block_translationListRelationFilter", {})
export class App_cms_block_translationListRelationFilter {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  every?: App_cms_block_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  some?: App_cms_block_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  none?: App_cms_block_translationWhereInput | undefined;
}
