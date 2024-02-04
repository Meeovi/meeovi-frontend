import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutShipping_method_translationInput } from "../inputs/LanguageCreateWithoutShipping_method_translationInput";
import { LanguageUpdateWithoutShipping_method_translationInput } from "../inputs/LanguageUpdateWithoutShipping_method_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutShipping_method_translationInput", {})
export class LanguageUpsertWithoutShipping_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutShipping_method_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutShipping_method_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutShipping_method_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutShipping_method_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
