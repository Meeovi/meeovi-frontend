import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_profileInput } from "../inputs/Import_export_logCreateManyImport_export_profileInput";

@TypeGraphQL.InputType("Import_export_logCreateManyImport_export_profileInputEnvelope", {})
export class Import_export_logCreateManyImport_export_profileInputEnvelope {
  @TypeGraphQL.Field(_type => [Import_export_logCreateManyImport_export_profileInput], {
    nullable: false
  })
  data!: Import_export_logCreateManyImport_export_profileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
