import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutApp_flow_eventInput } from "../inputs/FlowUpdateWithoutApp_flow_eventInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput", {})
export class FlowUpdateWithWhereUniqueWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutApp_flow_eventInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutApp_flow_eventInput;
}
