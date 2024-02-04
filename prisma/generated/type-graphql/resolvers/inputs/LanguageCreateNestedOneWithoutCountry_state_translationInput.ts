import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCountry_state_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCountry_state_translationInput";
import { LanguageCreateWithoutCountry_state_translationInput } from "../inputs/LanguageCreateWithoutCountry_state_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCountry_state_translationInput", {})
export class LanguageCreateNestedOneWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_state_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCountry_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCountry_state_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCountry_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
