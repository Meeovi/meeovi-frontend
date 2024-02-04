import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateWithoutApp_cms_block_translationInput";
import { LanguageUpdateWithoutApp_cms_block_translationInput } from "../inputs/LanguageUpdateWithoutApp_cms_block_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutApp_cms_block_translationInput", {})
export class LanguageUpsertWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutApp_cms_block_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_cms_block_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
