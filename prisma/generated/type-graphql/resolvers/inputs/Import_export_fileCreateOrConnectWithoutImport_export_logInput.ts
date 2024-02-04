import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileCreateWithoutImport_export_logInput } from "../inputs/Import_export_fileCreateWithoutImport_export_logInput";
import { Import_export_fileWhereUniqueInput } from "../inputs/Import_export_fileWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_fileCreateOrConnectWithoutImport_export_logInput", {})
export class Import_export_fileCreateOrConnectWithoutImport_export_logInput {
  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_fileWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_fileCreateWithoutImport_export_logInput, {
    nullable: false
  })
  create!: Import_export_fileCreateWithoutImport_export_logInput;
}
