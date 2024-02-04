import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutLocale_translationInput } from "../inputs/LanguageUpdateWithoutLocale_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutLocale_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLocale_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutLocale_translationInput;
}
