import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCurrency_translationInput } from "../inputs/LanguageCreateWithoutCurrency_translationInput";
import { LanguageUpdateWithoutCurrency_translationInput } from "../inputs/LanguageUpdateWithoutCurrency_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCurrency_translationInput", {})
export class LanguageUpsertWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCurrency_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCurrency_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCurrency_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCurrency_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
