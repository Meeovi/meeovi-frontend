import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutApp_flow_eventInput } from "../inputs/FlowCreateWithoutApp_flow_eventInput";
import { FlowUpdateWithoutApp_flow_eventInput } from "../inputs/FlowUpdateWithoutApp_flow_eventInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput", {})
export class FlowUpsertWithWhereUniqueWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutApp_flow_eventInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutApp_flow_eventInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutApp_flow_eventInput, {
    nullable: false
  })
  create!: FlowCreateWithoutApp_flow_eventInput;
}
