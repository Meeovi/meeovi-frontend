import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateOrConnectWithoutImport_export_profile_translationInput";
import { LanguageCreateWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateWithoutImport_export_profile_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutImport_export_profile_translationInput", {})
export class LanguageCreateNestedOneWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
