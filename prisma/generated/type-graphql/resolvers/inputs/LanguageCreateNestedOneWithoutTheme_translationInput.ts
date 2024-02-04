import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutTheme_translationInput } from "../inputs/LanguageCreateOrConnectWithoutTheme_translationInput";
import { LanguageCreateWithoutTheme_translationInput } from "../inputs/LanguageCreateWithoutTheme_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutTheme_translationInput", {})
export class LanguageCreateNestedOneWithoutTheme_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutTheme_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutTheme_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutTheme_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutTheme_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
