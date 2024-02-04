import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyMutationInput } from "../inputs/LanguageUpdateManyMutationInput";

@TypeGraphQL.InputType("LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput", {})
export class LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageScalarWhereInput, {
    nullable: false
  })
  where!: LanguageScalarWhereInput;

  @TypeGraphQL.Field(_type => LanguageUpdateManyMutationInput, {
    nullable: false
  })
  data!: LanguageUpdateManyMutationInput;
}
