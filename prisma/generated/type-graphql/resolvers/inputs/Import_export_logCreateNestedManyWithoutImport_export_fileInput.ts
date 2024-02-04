import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_fileInputEnvelope } from "../inputs/Import_export_logCreateManyImport_export_fileInputEnvelope";
import { Import_export_logCreateOrConnectWithoutImport_export_fileInput } from "../inputs/Import_export_logCreateOrConnectWithoutImport_export_fileInput";
import { Import_export_logCreateWithoutImport_export_fileInput } from "../inputs/Import_export_logCreateWithoutImport_export_fileInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logCreateNestedManyWithoutImport_export_fileInput", {})
export class Import_export_logCreateNestedManyWithoutImport_export_fileInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutImport_export_fileInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutImport_export_fileInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyImport_export_fileInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyImport_export_fileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_logWhereUniqueInput[] | undefined;
}
