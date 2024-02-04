import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logUpdateWithoutImport_export_fileInput } from "../inputs/Import_export_logUpdateWithoutImport_export_fileInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput", {})
export class Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput {
  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_logUpdateWithoutImport_export_fileInput, {
    nullable: false
  })
  data!: Import_export_logUpdateWithoutImport_export_fileInput;
}
