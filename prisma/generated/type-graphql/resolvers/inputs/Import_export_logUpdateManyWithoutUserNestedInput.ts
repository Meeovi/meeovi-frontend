import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyUserInputEnvelope } from "../inputs/Import_export_logCreateManyUserInputEnvelope";
import { Import_export_logCreateOrConnectWithoutUserInput } from "../inputs/Import_export_logCreateOrConnectWithoutUserInput";
import { Import_export_logCreateWithoutUserInput } from "../inputs/Import_export_logCreateWithoutUserInput";
import { Import_export_logScalarWhereInput } from "../inputs/Import_export_logScalarWhereInput";
import { Import_export_logUpdateManyWithWhereWithoutUserInput } from "../inputs/Import_export_logUpdateManyWithWhereWithoutUserInput";
import { Import_export_logUpdateWithWhereUniqueWithoutUserInput } from "../inputs/Import_export_logUpdateWithWhereUniqueWithoutUserInput";
import { Import_export_logUpsertWithWhereUniqueWithoutUserInput } from "../inputs/Import_export_logUpsertWithWhereUniqueWithoutUserInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateManyWithoutUserNestedInput", {})
export class Import_export_logUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutUserInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: Import_export_logUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Import_export_logUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: Import_export_logUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: Import_export_logUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Import_export_logScalarWhereInput[] | undefined;
}
