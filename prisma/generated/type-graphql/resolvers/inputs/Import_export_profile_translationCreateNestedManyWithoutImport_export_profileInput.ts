import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateManyImport_export_profileInputEnvelope } from "../inputs/Import_export_profile_translationCreateManyImport_export_profileInputEnvelope";
import { Import_export_profile_translationCreateOrConnectWithoutImport_export_profileInput } from "../inputs/Import_export_profile_translationCreateOrConnectWithoutImport_export_profileInput";
import { Import_export_profile_translationCreateWithoutImport_export_profileInput } from "../inputs/Import_export_profile_translationCreateWithoutImport_export_profileInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput", {})
export class Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateWithoutImport_export_profileInput], {
    nullable: true
  })
  create?: Import_export_profile_translationCreateWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateOrConnectWithoutImport_export_profileInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_profile_translationCreateOrConnectWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateManyImport_export_profileInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_profile_translationCreateManyImport_export_profileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_profile_translationWhereUniqueInput[] | undefined;
}
