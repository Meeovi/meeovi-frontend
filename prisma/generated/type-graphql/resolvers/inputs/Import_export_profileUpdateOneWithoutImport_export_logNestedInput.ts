import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileCreateOrConnectWithoutImport_export_logInput } from "../inputs/Import_export_profileCreateOrConnectWithoutImport_export_logInput";
import { Import_export_profileCreateWithoutImport_export_logInput } from "../inputs/Import_export_profileCreateWithoutImport_export_logInput";
import { Import_export_profileUpdateToOneWithWhereWithoutImport_export_logInput } from "../inputs/Import_export_profileUpdateToOneWithWhereWithoutImport_export_logInput";
import { Import_export_profileUpsertWithoutImport_export_logInput } from "../inputs/Import_export_profileUpsertWithoutImport_export_logInput";
import { Import_export_profileWhereInput } from "../inputs/Import_export_profileWhereInput";
import { Import_export_profileWhereUniqueInput } from "../inputs/Import_export_profileWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profileUpdateOneWithoutImport_export_logNestedInput", {})
export class Import_export_profileUpdateOneWithoutImport_export_logNestedInput {
  @TypeGraphQL.Field(_type => Import_export_profileCreateWithoutImport_export_logInput, {
    nullable: true
  })
  create?: Import_export_profileCreateWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileCreateOrConnectWithoutImport_export_logInput, {
    nullable: true
  })
  connectOrCreate?: Import_export_profileCreateOrConnectWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileUpsertWithoutImport_export_logInput, {
    nullable: true
  })
  upsert?: Import_export_profileUpsertWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  disconnect?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  delete?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: true
  })
  connect?: Import_export_profileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileUpdateToOneWithWhereWithoutImport_export_logInput, {
    nullable: true
  })
  update?: Import_export_profileUpdateToOneWithWhereWithoutImport_export_logInput | undefined;
}
