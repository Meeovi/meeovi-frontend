import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutTax_provider_translationInput } from "../inputs/LanguageCreateWithoutTax_provider_translationInput";
import { LanguageUpdateWithoutTax_provider_translationInput } from "../inputs/LanguageUpdateWithoutTax_provider_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutTax_provider_translationInput", {})
export class LanguageUpsertWithoutTax_provider_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTax_provider_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutTax_provider_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_provider_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutTax_provider_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
