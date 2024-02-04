import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_cms_block_translationInput";
import { LanguageCreateWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateWithoutApp_cms_block_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutApp_cms_block_translationInput", {})
export class LanguageCreateNestedOneWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_cms_block_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_cms_block_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
