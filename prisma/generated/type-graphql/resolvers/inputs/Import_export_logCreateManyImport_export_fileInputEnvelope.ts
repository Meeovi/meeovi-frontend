import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_fileInput } from "../inputs/Import_export_logCreateManyImport_export_fileInput";

@TypeGraphQL.InputType("Import_export_logCreateManyImport_export_fileInputEnvelope", {})
export class Import_export_logCreateManyImport_export_fileInputEnvelope {
  @TypeGraphQL.Field(_type => [Import_export_logCreateManyImport_export_fileInput], {
    nullable: false
  })
  data!: Import_export_logCreateManyImport_export_fileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
