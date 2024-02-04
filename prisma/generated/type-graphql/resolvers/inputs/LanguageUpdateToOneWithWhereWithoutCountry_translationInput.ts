import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCountry_translationInput } from "../inputs/LanguageUpdateWithoutCountry_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCountry_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCountry_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCountry_translationInput;
}
