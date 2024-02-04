import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateWithoutLanguageInput";
import { App_cms_block_translationWhereUniqueInput } from "../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateOrConnectWithoutLanguageInput", {})
export class App_cms_block_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_block_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: App_cms_block_translationCreateWithoutLanguageInput;
}
