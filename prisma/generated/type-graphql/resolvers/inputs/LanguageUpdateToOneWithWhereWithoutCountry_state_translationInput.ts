import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCountry_state_translationInput } from "../inputs/LanguageUpdateWithoutCountry_state_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCountry_state_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCountry_state_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCountry_state_translationInput;
}
