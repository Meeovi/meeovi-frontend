import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_profileInputEnvelope } from "../inputs/Import_export_logCreateManyImport_export_profileInputEnvelope";
import { Import_export_logCreateOrConnectWithoutImport_export_profileInput } from "../inputs/Import_export_logCreateOrConnectWithoutImport_export_profileInput";
import { Import_export_logCreateWithoutImport_export_profileInput } from "../inputs/Import_export_logCreateWithoutImport_export_profileInput";
import { Import_export_logScalarWhereInput } from "../inputs/Import_export_logScalarWhereInput";
import { Import_export_logUpdateManyWithWhereWithoutImport_export_profileInput } from "../inputs/Import_export_logUpdateManyWithWhereWithoutImport_export_profileInput";
import { Import_export_logUpdateWithWhereUniqueWithoutImport_export_profileInput } from "../inputs/Import_export_logUpdateWithWhereUniqueWithoutImport_export_profileInput";
import { Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput } from "../inputs/Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateManyWithoutImport_export_profileNestedInput", {})
export class Import_export_logUpdateManyWithoutImport_export_profileNestedInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutImport_export_profileInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutImport_export_profileInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput], {
    nullable: true
  })
  upsert?: Import_export_logUpsertWithWhereUniqueWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyImport_export_profileInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyImport_export_profileInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Import_export_logUpdateWithWhereUniqueWithoutImport_export_profileInput], {
    nullable: true
  })
  update?: Import_export_logUpdateWithWhereUniqueWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpdateManyWithWhereWithoutImport_export_profileInput], {
    nullable: true
  })
  updateMany?: Import_export_logUpdateManyWithWhereWithoutImport_export_profileInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Import_export_logScalarWhereInput[] | undefined;
}
