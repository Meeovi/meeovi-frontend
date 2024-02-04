import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileCreateNestedOneWithoutImport_export_logInput } from "../inputs/Import_export_fileCreateNestedOneWithoutImport_export_logInput";
import { Import_export_logCreateNestedOneWithoutOther_import_export_logInput } from "../inputs/Import_export_logCreateNestedOneWithoutOther_import_export_logInput";
import { Import_export_profileCreateNestedOneWithoutImport_export_logInput } from "../inputs/Import_export_profileCreateNestedOneWithoutImport_export_logInput";
import { UserCreateNestedOneWithoutImport_export_logInput } from "../inputs/UserCreateNestedOneWithoutImport_export_logInput";

@TypeGraphQL.InputType("Import_export_logCreateWithoutOther_import_export_logInput", {})
export class Import_export_logCreateWithoutOther_import_export_logInput {
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
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_name?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  result?: string | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileCreateNestedOneWithoutImport_export_logInput, {
    nullable: true
  })
  import_export_file?: Import_export_fileCreateNestedOneWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateNestedOneWithoutOther_import_export_logInput, {
    nullable: true
  })
  import_export_log?: Import_export_logCreateNestedOneWithoutOther_import_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileCreateNestedOneWithoutImport_export_logInput, {
    nullable: true
  })
  import_export_profile?: Import_export_profileCreateNestedOneWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutImport_export_logInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutImport_export_logInput | undefined;
}
