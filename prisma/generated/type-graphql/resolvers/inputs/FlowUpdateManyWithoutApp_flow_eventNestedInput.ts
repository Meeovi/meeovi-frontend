import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyApp_flow_eventInputEnvelope } from "../inputs/FlowCreateManyApp_flow_eventInputEnvelope";
import { FlowCreateOrConnectWithoutApp_flow_eventInput } from "../inputs/FlowCreateOrConnectWithoutApp_flow_eventInput";
import { FlowCreateWithoutApp_flow_eventInput } from "../inputs/FlowCreateWithoutApp_flow_eventInput";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyWithWhereWithoutApp_flow_eventInput } from "../inputs/FlowUpdateManyWithWhereWithoutApp_flow_eventInput";
import { FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput } from "../inputs/FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput";
import { FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput } from "../inputs/FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateManyWithoutApp_flow_eventNestedInput", {})
export class FlowUpdateManyWithoutApp_flow_eventNestedInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutApp_flow_eventInput], {
    nullable: true
  })
  create?: FlowCreateWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutApp_flow_eventInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput], {
    nullable: true
  })
  upsert?: FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyApp_flow_eventInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyApp_flow_eventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  set?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput], {
    nullable: true
  })
  update?: FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateManyWithWhereWithoutApp_flow_eventInput], {
    nullable: true
  })
  updateMany?: FlowUpdateManyWithWhereWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowScalarWhereInput[] | undefined;
}
