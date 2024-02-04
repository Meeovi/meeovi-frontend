import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutApp_cms_block_translationInput } from "../inputs/LanguageUpdateWithoutApp_cms_block_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutApp_cms_block_translationInput;
}
