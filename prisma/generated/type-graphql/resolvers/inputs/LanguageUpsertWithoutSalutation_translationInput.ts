import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSalutation_translationInput } from "../inputs/LanguageCreateWithoutSalutation_translationInput";
import { LanguageUpdateWithoutSalutation_translationInput } from "../inputs/LanguageUpdateWithoutSalutation_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSalutation_translationInput", {})
export class LanguageUpsertWithoutSalutation_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSalutation_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSalutation_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSalutation_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSalutation_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
