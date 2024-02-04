import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateWithoutLanguageInput", {})
export class Import_export_profile_translationCreateWithoutLanguageInput {
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

  @TypeGraphQL.Field(_type => Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  import_export_profile!: Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput;
}
