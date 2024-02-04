import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileCreateOrConnectWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileCreateOrConnectWithoutImport_export_profile_translationInput";
import { Import_export_profileCreateWithoutImport_export_profile_translationInput } from "../inputs/Import_export_profileCreateWithoutImport_export_profile_translationInput";
import { Import_export_profileWhereUniqueInput } from "../inputs/Import_export_profileWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput", {})
export class Import_export_profileCreateNestedOneWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => Import_export_profileCreateWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  create?: Import_export_profileCreateWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileCreateOrConnectWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  connectOrCreate?: Import_export_profileCreateOrConnectWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: true
  })
  connect?: Import_export_profileWhereUniqueInput | undefined;
}
