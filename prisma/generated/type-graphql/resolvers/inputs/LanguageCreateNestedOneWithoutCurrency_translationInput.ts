import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCurrency_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCurrency_translationInput";
import { LanguageCreateWithoutCurrency_translationInput } from "../inputs/LanguageCreateWithoutCurrency_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCurrency_translationInput", {})
export class LanguageCreateNestedOneWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCurrency_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCurrency_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
