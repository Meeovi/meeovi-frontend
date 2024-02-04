import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateWithoutOther_import_export_logInput } from "../inputs/Import_export_logCreateWithoutOther_import_export_logInput";
import { Import_export_logUpdateWithoutOther_import_export_logInput } from "../inputs/Import_export_logUpdateWithoutOther_import_export_logInput";
import { Import_export_logWhereInput } from "../inputs/Import_export_logWhereInput";

@TypeGraphQL.InputType("Import_export_logUpsertWithoutOther_import_export_logInput", {})
export class Import_export_logUpsertWithoutOther_import_export_logInput {
  @TypeGraphQL.Field(_type => Import_export_logUpdateWithoutOther_import_export_logInput, {
    nullable: false
  })
  update!: Import_export_logUpdateWithoutOther_import_export_logInput;

  @TypeGraphQL.Field(_type => Import_export_logCreateWithoutOther_import_export_logInput, {
    nullable: false
  })
  create!: Import_export_logCreateWithoutOther_import_export_logInput;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  where?: Import_export_logWhereInput | undefined;
}
