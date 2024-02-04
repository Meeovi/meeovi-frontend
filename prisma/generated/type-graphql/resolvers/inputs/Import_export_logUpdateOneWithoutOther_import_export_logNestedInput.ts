import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateOrConnectWithoutOther_import_export_logInput } from "../inputs/Import_export_logCreateOrConnectWithoutOther_import_export_logInput";
import { Import_export_logCreateWithoutOther_import_export_logInput } from "../inputs/Import_export_logCreateWithoutOther_import_export_logInput";
import { Import_export_logUpdateToOneWithWhereWithoutOther_import_export_logInput } from "../inputs/Import_export_logUpdateToOneWithWhereWithoutOther_import_export_logInput";
import { Import_export_logUpsertWithoutOther_import_export_logInput } from "../inputs/Import_export_logUpsertWithoutOther_import_export_logInput";
import { Import_export_logWhereInput } from "../inputs/Import_export_logWhereInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateOneWithoutOther_import_export_logNestedInput", {})
export class Import_export_logUpdateOneWithoutOther_import_export_logNestedInput {
  @TypeGraphQL.Field(_type => Import_export_logCreateWithoutOther_import_export_logInput, {
    nullable: true
  })
  create?: Import_export_logCreateWithoutOther_import_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateOrConnectWithoutOther_import_export_logInput, {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutOther_import_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logUpsertWithoutOther_import_export_logInput, {
    nullable: true
  })
  upsert?: Import_export_logUpsertWithoutOther_import_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  disconnect?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  delete?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: true
  })
  connect?: Import_export_logWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logUpdateToOneWithWhereWithoutOther_import_export_logInput, {
    nullable: true
  })
  update?: Import_export_logUpdateToOneWithWhereWithoutOther_import_export_logInput | undefined;
}
