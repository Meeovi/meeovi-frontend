import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateWithoutImport_export_profile_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutImport_export_profile_translationInput", {})
export class LanguageCreateOrConnectWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutImport_export_profile_translationInput;
}
