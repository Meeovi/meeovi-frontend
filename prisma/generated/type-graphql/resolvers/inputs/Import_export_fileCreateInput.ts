import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateNestedManyWithoutImport_export_fileInput } from "../inputs/Import_export_logCreateNestedManyWithoutImport_export_fileInput";

@TypeGraphQL.InputType("Import_export_fileCreateInput", {})
export class Import_export_fileCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  original_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expire_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token?: string | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateNestedManyWithoutImport_export_fileInput, {
    nullable: true
  })
  import_export_log?: Import_export_logCreateNestedManyWithoutImport_export_fileInput | undefined;
}
