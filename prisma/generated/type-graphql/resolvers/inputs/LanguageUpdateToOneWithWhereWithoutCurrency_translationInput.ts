import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCurrency_translationInput } from "../inputs/LanguageUpdateWithoutCurrency_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCurrency_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCurrency_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCurrency_translationInput;
}
