import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutTheme_translationInput } from "../inputs/LanguageUpdateWithoutTheme_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutTheme_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutTheme_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTheme_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutTheme_translationInput;
}
