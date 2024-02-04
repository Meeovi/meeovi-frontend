import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateNestedOneWithoutImport_export_profile_translationInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateWithoutImport_export_profileInput", {})
export class Import_export_profile_translationCreateWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutImport_export_profile_translationInput;
}
