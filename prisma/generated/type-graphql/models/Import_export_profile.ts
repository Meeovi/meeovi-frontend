import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Import_export_log } from "../models/Import_export_log";
import { Import_export_profile_translation } from "../models/Import_export_profile_translation";
import { Import_export_profileCount } from "../resolvers/outputs/Import_export_profileCount";

@TypeGraphQL.ObjectType("Import_export_profile", {})
export class Import_export_profile {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  system_default!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  source_entity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delimiter?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enclosure?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mapping?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update_by?: string | null;

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

  import_export_log?: Import_export_log[];

  import_export_profile_translation?: Import_export_profile_translation[];

  @TypeGraphQL.Field(_type => Import_export_profileCount, {
    nullable: true
  })
  _count?: Import_export_profileCount | null;
}
