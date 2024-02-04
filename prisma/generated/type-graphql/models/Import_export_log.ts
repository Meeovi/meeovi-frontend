import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Import_export_file } from "../models/Import_export_file";
import { Import_export_profile } from "../models/Import_export_profile";
import { User } from "../models/User";
import { Import_export_logCount } from "../resolvers/outputs/Import_export_logCount";

@TypeGraphQL.ObjectType("Import_export_log", {})
export class Import_export_log {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  activity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  records!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_name?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  profile_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  file_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  result?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  invalid_records_log_id?: Buffer | null;

  import_export_file?: Import_export_file | null;

  import_export_log?: Import_export_log | null;

  other_import_export_log?: Import_export_log[];

  import_export_profile?: Import_export_profile | null;

  user?: User | null;

  @TypeGraphQL.Field(_type => Import_export_logCount, {
    nullable: true
  })
  _count?: Import_export_logCount | null;
}
