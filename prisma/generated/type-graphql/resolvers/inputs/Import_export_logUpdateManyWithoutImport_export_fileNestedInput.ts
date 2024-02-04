import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_fileInputEnvelope } from "../inputs/Import_export_logCreateManyImport_export_fileInputEnvelope";
import { Import_export_logCreateOrConnectWithoutImport_export_fileInput } from "../inputs/Import_export_logCreateOrConnectWithoutImport_export_fileInput";
import { Import_export_logCreateWithoutImport_export_fileInput } from "../inputs/Import_export_logCreateWithoutImport_export_fileInput";
import { Import_export_logScalarWhereInput } from "../inputs/Import_export_logScalarWhereInput";
import { Import_export_logUpdateManyWithWhereWithoutImport_export_fileInput } from "../inputs/Import_export_logUpdateManyWithWhereWithoutImport_export_fileInput";
import { Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput } from "../inputs/Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput";
import { Import_export_logUpsertWithWhereUniqueWithoutImport_export_fileInput } from "../inputs/Import_export_logUpsertWithWhereUniqueWithoutImport_export_fileInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateManyWithoutImport_export_fileNestedInput", {})
export class Import_export_logUpdateManyWithoutImport_export_fileNestedInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutImport_export_fileInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutImport_export_fileInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpsertWithWhereUniqueWithoutImport_export_fileInput], {
    nullable: true
  })
  upsert?: Import_export_logUpsertWithWhereUniqueWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyImport_export_fileInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyImport_export_fileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  set?: Import_export_logWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Import_export_logWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  delete?: Import_export_logWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_logWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput], {
    nullable: true
  })
  update?: Import_export_logUpdateWithWhereUniqueWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpdateManyWithWhereWithoutImport_export_fileInput], {
    nullable: true
  })
  updateMany?: Import_export_logUpdateManyWithWhereWithoutImport_export_fileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Import_export_logScalarWhereInput[] | undefined;
}
