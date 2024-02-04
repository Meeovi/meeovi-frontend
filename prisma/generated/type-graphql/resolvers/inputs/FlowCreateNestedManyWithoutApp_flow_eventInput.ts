import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyApp_flow_eventInputEnvelope } from "../inputs/FlowCreateManyApp_flow_eventInputEnvelope";
import { FlowCreateOrConnectWithoutApp_flow_eventInput } from "../inputs/FlowCreateOrConnectWithoutApp_flow_eventInput";
import { FlowCreateWithoutApp_flow_eventInput } from "../inputs/FlowCreateWithoutApp_flow_eventInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedManyWithoutApp_flow_eventInput", {})
export class FlowCreateNestedManyWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutApp_flow_eventInput], {
    nullable: true
  })
  create?: FlowCreateWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutApp_flow_eventInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutApp_flow_eventInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyApp_flow_eventInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyApp_flow_eventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;
}
