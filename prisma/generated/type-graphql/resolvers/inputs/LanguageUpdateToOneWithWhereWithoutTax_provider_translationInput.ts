import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutTax_provider_translationInput } from "../inputs/LanguageUpdateWithoutTax_provider_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTax_provider_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutTax_provider_translationInput;
}
