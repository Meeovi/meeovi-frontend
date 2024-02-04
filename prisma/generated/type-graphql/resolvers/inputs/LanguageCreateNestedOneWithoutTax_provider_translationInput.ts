import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutTax_provider_translationInput } from "../inputs/LanguageCreateOrConnectWithoutTax_provider_translationInput";
import { LanguageCreateWithoutTax_provider_translationInput } from "../inputs/LanguageCreateWithoutTax_provider_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutTax_provider_translationInput", {})
export class LanguageCreateNestedOneWithoutTax_provider_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_provider_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutTax_provider_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutTax_provider_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutTax_provider_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
