import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_logInput } from "../inputs/Import_export_logCreateManyImport_export_logInput";

@TypeGraphQL.InputType("Import_export_logCreateManyImport_export_logInputEnvelope", {})
export class Import_export_logCreateManyImport_export_logInputEnvelope {
  @TypeGraphQL.Field(_type => [Import_export_logCreateManyImport_export_logInput], {
    nullable: false
  })
  data!: Import_export_logCreateManyImport_export_logInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
