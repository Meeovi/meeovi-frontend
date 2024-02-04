import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLocale_translationInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_translationInput";
import { LanguageCreateWithoutLocale_translationInput } from "../inputs/LanguageCreateWithoutLocale_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutLocale_translationInput", {})
export class LanguageCreateNestedOneWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLocale_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
