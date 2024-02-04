import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlowInputEnvelope } from "../inputs/Flow_sequenceCreateManyFlowInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutFlowInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutFlowInput";
import { Flow_sequenceCreateWithoutFlowInput } from "../inputs/Flow_sequenceCreateWithoutFlowInput";
import { Flow_sequenceScalarWhereInput } from "../inputs/Flow_sequenceScalarWhereInput";
import { Flow_sequenceUpdateManyWithWhereWithoutFlowInput } from "../inputs/Flow_sequenceUpdateManyWithWhereWithoutFlowInput";
import { Flow_sequenceUpdateWithWhereUniqueWithoutFlowInput } from "../inputs/Flow_sequenceUpdateWithWhereUniqueWithoutFlowInput";
import { Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput } from "../inputs/Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateManyWithoutFlowNestedInput", {})
export class Flow_sequenceUpdateManyWithoutFlowNestedInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutFlowInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutFlowInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput], {
    nullable: true
  })
  upsert?: Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyFlowInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyFlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  set?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  delete?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateWithWhereUniqueWithoutFlowInput], {
    nullable: true
  })
  update?: Flow_sequenceUpdateWithWhereUniqueWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateManyWithWhereWithoutFlowInput], {
    nullable: true
  })
  updateMany?: Flow_sequenceUpdateManyWithWhereWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Flow_sequenceScalarWhereInput[] | undefined;
}
