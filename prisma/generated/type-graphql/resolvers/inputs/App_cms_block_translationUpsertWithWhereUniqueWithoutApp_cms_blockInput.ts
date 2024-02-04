import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateWithoutApp_cms_blockInput } from "../inputs/App_cms_block_translationCreateWithoutApp_cms_blockInput";
import { App_cms_block_translationUpdateWithoutApp_cms_blockInput } from "../inputs/App_cms_block_translationUpdateWithoutApp_cms_blockInput";
import { App_cms_block_translationWhereUniqueInput } from "../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_block_translationUpsertWithWhereUniqueWithoutApp_cms_blockInput", {})
export class App_cms_block_translationUpsertWithWhereUniqueWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_block_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_cms_block_translationUpdateWithoutApp_cms_blockInput, {
    nullable: false
  })
  update!: App_cms_block_translationUpdateWithoutApp_cms_blockInput;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateWithoutApp_cms_blockInput, {
    nullable: false
  })
  create!: App_cms_block_translationCreateWithoutApp_cms_blockInput;
}
