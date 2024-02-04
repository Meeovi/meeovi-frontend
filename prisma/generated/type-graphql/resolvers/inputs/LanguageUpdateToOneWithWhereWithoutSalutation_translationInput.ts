import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSalutation_translationInput } from "../inputs/LanguageUpdateWithoutSalutation_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutSalutation_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutSalutation_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSalutation_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSalutation_translationInput;
}
