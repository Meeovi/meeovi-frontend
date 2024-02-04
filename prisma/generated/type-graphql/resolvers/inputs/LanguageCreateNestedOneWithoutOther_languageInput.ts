import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutOther_languageInput } from "../inputs/LanguageCreateOrConnectWithoutOther_languageInput";
import { LanguageCreateWithoutOther_languageInput } from "../inputs/LanguageCreateWithoutOther_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutOther_languageInput", {})
export class LanguageCreateNestedOneWithoutOther_languageInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutOther_languageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutOther_languageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
