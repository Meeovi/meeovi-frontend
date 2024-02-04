import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileUpdateWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileUpdateWithoutImport_export_profile_translationInput";
import { Import_export_profileWhereInput } from "../inputs/Import_export_profileWhereInput";

@TypeGraphQL.InputType("Import_export_profileUpdateToOneWithWhereWithoutImport_export_profile_translationInput", {})
export class Import_export_profileUpdateToOneWithWhereWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  where?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileUpdateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  data!: Import_export_profileUpdateWithoutImport_export_profile_translationInput;
}
