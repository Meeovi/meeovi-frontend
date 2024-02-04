import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_cms_block_translationInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateWithoutApp_cms_blockInput", {})
export class App_cms_block_translationCreateWithoutApp_cms_blockInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_cms_block_translationInput;
}
