import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCreateNestedOneWithoutApp_cms_block_translationInput } from "../inputs/App_cms_blockCreateNestedOneWithoutApp_cms_block_translationInput";
import { LanguageCreateNestedOneWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_cms_block_translationInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateInput", {})
export class App_cms_block_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockCreateNestedOneWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  app_cms_block!: App_cms_blockCreateNestedOneWithoutApp_cms_block_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_cms_block_translationInput;
}
