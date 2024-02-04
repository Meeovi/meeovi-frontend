import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCountry_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCountry_translationInput";
import { LanguageCreateWithoutCountry_translationInput } from "../inputs/LanguageCreateWithoutCountry_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCountry_translationInput", {})
export class LanguageCreateNestedOneWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCountry_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
