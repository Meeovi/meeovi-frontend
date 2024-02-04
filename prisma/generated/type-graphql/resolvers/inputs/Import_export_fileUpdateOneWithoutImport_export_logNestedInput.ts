import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileCreateOrConnectWithoutImport_export_logInput } from "../inputs/Import_export_fileCreateOrConnectWithoutImport_export_logInput";
import { Import_export_fileCreateWithoutImport_export_logInput } from "../inputs/Import_export_fileCreateWithoutImport_export_logInput";
import { Import_export_fileUpdateToOneWithWhereWithoutImport_export_logInput } from "../inputs/Import_export_fileUpdateToOneWithWhereWithoutImport_export_logInput";
import { Import_export_fileUpsertWithoutImport_export_logInput } from "../inputs/Import_export_fileUpsertWithoutImport_export_logInput";
import { Import_export_fileWhereInput } from "../inputs/Import_export_fileWhereInput";
import { Import_export_fileWhereUniqueInput } from "../inputs/Import_export_fileWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_fileUpdateOneWithoutImport_export_logNestedInput", {})
export class Import_export_fileUpdateOneWithoutImport_export_logNestedInput {
  @TypeGraphQL.Field(_type => Import_export_fileCreateWithoutImport_export_logInput, {
    nullable: true
  })
  create?: Import_export_fileCreateWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileCreateOrConnectWithoutImport_export_logInput, {
    nullable: true
  })
  connectOrCreate?: Import_export_fileCreateOrConnectWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileUpsertWithoutImport_export_logInput, {
    nullable: true
  })
  upsert?: Import_export_fileUpsertWithoutImport_export_logInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  disconnect?: Import_export_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  delete?: Import_export_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: true
  })
  connect?: Import_export_fileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileUpdateToOneWithWhereWithoutImport_export_logInput, {
    nullable: true
  })
  update?: Import_export_fileUpdateToOneWithWhereWithoutImport_export_logInput | undefined;
}
