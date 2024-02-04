import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Import_export_log } from "../models/Import_export_log";
import { Import_export_fileCount } from "../resolvers/outputs/Import_export_fileCount";

@TypeGraphQL.ObjectType("Import_export_file", {})
export class Import_export_file {
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
  size?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token?: string | null;

  import_export_log?: Import_export_log[];

  @TypeGraphQL.Field(_type => Import_export_fileCount, {
    nullable: true
  })
  _count?: Import_export_fileCount | null;
}
