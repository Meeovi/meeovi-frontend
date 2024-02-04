import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCreateWithoutApp_cms_block_translationInput } from "../inputs/App_cms_blockCreateWithoutApp_cms_block_translationInput";
import { App_cms_blockWhereUniqueInput } from "../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_blockCreateOrConnectWithoutApp_cms_block_translationInput", {})
export class App_cms_blockCreateOrConnectWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => App_cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_cms_blockCreateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  create!: App_cms_blockCreateWithoutApp_cms_block_translationInput;
}
