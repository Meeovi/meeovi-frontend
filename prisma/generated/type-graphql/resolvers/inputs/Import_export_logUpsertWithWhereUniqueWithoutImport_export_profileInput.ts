import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateWithoutImport_export_profileInput } from "../inputs/Import_export_logCreateWithoutImport_export_profileInput";
import { Import_export_logUpdateWithoutImport_export_profileInput } from "../inputs/Import_export_logUpdateWithoutImport_export_profileInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput", {})
export class Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_logUpdateWithoutImport_export_profileInput, {
    nullable: false
  })
  update!: Import_export_logUpdateWithoutImport_export_profileInput;

  @TypeGraphQL.Field(_type => Import_export_logCreateWithoutImport_export_profileInput, {
    nullable: false
  })
  create!: Import_export_logCreateWithoutImport_export_profileInput;
}
