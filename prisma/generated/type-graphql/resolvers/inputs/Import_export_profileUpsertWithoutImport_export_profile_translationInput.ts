import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileCreateWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileCreateWithoutImport_export_profile_translationInput";
import { Import_export_profileUpdateWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileUpdateWithoutImport_export_profile_translationInput";
import { Import_export_profileWhereInput } from "../inputs/Import_export_profileWhereInput";

@TypeGraphQL.InputType("Import_export_profileUpsertWithoutImport_export_profile_translationInput", {})
export class Import_export_profileUpsertWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => Import_export_profileUpdateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  update!: Import_export_profileUpdateWithoutImport_export_profile_translationInput;

  @TypeGraphQL.Field(_type => Import_export_profileCreateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  create!: Import_export_profileCreateWithoutImport_export_profile_translationInput;

  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  where?: Import_export_profileWhereInput | undefined;
}
