import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutDocument_type_translationInput } from "../inputs/LanguageCreateWithoutDocument_type_translationInput";
import { LanguageUpdateWithoutDocument_type_translationInput } from "../inputs/LanguageUpdateWithoutDocument_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutDocument_type_translationInput", {})
export class LanguageUpsertWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutDocument_type_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutDocument_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutDocument_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutDocument_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
