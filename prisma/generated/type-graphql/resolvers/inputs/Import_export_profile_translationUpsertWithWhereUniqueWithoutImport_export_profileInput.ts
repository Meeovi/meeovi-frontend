import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateWithoutImport_export_profileInput } from "../inputs/Import_export_profile_translationCreateWithoutImport_export_profileInput";
import { Import_export_profile_translationUpdateWithoutImport_export_profileInput } from "../inputs/Import_export_profile_translationUpdateWithoutImport_export_profileInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpsertWithWhereUniqueWithoutImport_export_profileInput", {})
export class Import_export_profile_translationUpsertWithWhereUniqueWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateWithoutImport_export_profileInput, {
    nullable: false
  })
  update!: Import_export_profile_translationUpdateWithoutImport_export_profileInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateWithoutImport_export_profileInput, {
    nullable: false
  })
  create!: Import_export_profile_translationCreateWithoutImport_export_profileInput;
}
