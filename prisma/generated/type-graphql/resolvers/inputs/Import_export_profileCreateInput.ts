import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateNestedManyWithoutImport_export_profileInput } from "../inputs/Import_export_logCreateNestedManyWithoutImport_export_profileInput";
import { Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput } from "../inputs/Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput";

@TypeGraphQL.InputType("Import_export_profileCreateInput", {})
export class Import_export_profileCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  system_default?: boolean | undefined;

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
  delimiter?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enclosure?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mapping?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update_by?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateNestedManyWithoutImport_export_profileInput, {
    nullable: true
  })
  import_export_log?: Import_export_logCreateNestedManyWithoutImport_export_profileInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationCreateNestedManyWithoutImport_export_profileInput | undefined;
}
