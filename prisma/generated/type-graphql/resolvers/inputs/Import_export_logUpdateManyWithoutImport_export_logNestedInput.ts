import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_logInputEnvelope } from "../inputs/Import_export_logCreateManyImport_export_logInputEnvelope";
import { Import_export_logCreateOrConnectWithoutImport_export_logInput } from "../inputs/Import_export_logCreateOrConnectWithoutImport_export_logInput";
import { Import_export_logCreateWithoutImport_export_logInput } from "../inputs/Import_export_logCreateWithoutImport_export_logInput";
import { Import_export_logScalarWhereInput } from "../inputs/Import_export_logScalarWhereInput";
import { Import_export_logUpdateManyWithWhereWithoutImport_export_logInput } from "../inputs/Import_export_logUpdateManyWithWhereWithoutImport_export_logInput";
import { Import_export_logUpdateWithWhereUniqueWithoutImport_export_logInput } from "../inputs/Import_export_logUpdateWithWhereUniqueWithoutImport_export_logInput";
import { Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput } from "../inputs/Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateManyWithoutImport_export_logNestedInput", {})
export class Import_export_logUpdateManyWithoutImport_export_logNestedInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutImport_export_logInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutImport_export_logInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput], {
    nullable: true
  })
  upsert?: Import_export_logUpsertWithWhereUniqueWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyImport_export_logInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyImport_export_logInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Import_export_logUpdateWithWhereUniqueWithoutImport_export_logInput], {
    nullable: true
  })
  update?: Import_export_logUpdateWithWhereUniqueWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpdateManyWithWhereWithoutImport_export_logInput], {
    nullable: true
  })
  updateMany?: Import_export_logUpdateManyWithWhereWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Import_export_logScalarWhereInput[] | undefined;
}
