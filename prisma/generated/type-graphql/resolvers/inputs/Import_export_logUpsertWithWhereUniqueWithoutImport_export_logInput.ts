import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateWithoutImport_export_logInput } from "../inputs/Import_export_logCreateWithoutImport_export_logInput";
import { Import_export_logUpdateWithoutImport_export_logInput } from "../inputs/Import_export_logUpdateWithoutImport_export_logInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput", {})
export class Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput {
  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_logUpdateWithoutImport_export_logInput, {
    nullable: false
  })
  update!: Import_export_logUpdateWithoutImport_export_logInput;

  @TypeGraphQL.Field(_type => Import_export_logCreateWithoutImport_export_logInput, {
    nullable: false
  })
  create!: Import_export_logCreateWithoutImport_export_logInput;
}
