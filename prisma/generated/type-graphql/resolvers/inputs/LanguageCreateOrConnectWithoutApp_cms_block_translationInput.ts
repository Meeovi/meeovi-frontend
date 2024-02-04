import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateWithoutApp_cms_block_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutApp_cms_block_translationInput", {})
export class LanguageCreateOrConnectWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_cms_block_translationInput;
}
