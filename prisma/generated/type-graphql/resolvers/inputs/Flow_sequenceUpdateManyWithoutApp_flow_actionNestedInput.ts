import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyApp_flow_actionInputEnvelope } from "../inputs/Flow_sequenceCreateManyApp_flow_actionInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput";
import { Flow_sequenceCreateWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceCreateWithoutApp_flow_actionInput";
import { Flow_sequenceScalarWhereInput } from "../inputs/Flow_sequenceScalarWhereInput";
import { Flow_sequenceUpdateManyWithWhereWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceUpdateManyWithWhereWithoutApp_flow_actionInput";
import { Flow_sequenceUpdateWithWhereUniqueWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceUpdateWithWhereUniqueWithoutApp_flow_actionInput";
import { Flow_sequenceUpsertWithWhereUniqueWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceUpsertWithWhereUniqueWithoutApp_flow_actionInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateManyWithoutApp_flow_actionNestedInput", {})
export class Flow_sequenceUpdateManyWithoutApp_flow_actionNestedInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutApp_flow_actionInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpsertWithWhereUniqueWithoutApp_flow_actionInput], {
    nullable: true
  })
  upsert?: Flow_sequenceUpsertWithWhereUniqueWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyApp_flow_actionInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyApp_flow_actionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateWithWhereUniqueWithoutApp_flow_actionInput], {
    nullable: true
  })
  update?: Flow_sequenceUpdateWithWhereUniqueWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateManyWithWhereWithoutApp_flow_actionInput], {
    nullable: true
  })
  updateMany?: Flow_sequenceUpdateManyWithWhereWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Flow_sequenceScalarWhereInput[] | undefined;
}
