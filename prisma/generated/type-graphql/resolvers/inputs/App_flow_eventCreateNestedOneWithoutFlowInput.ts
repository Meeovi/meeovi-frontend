import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateOrConnectWithoutFlowInput } from "../inputs/App_flow_eventCreateOrConnectWithoutFlowInput";
import { App_flow_eventCreateWithoutFlowInput } from "../inputs/App_flow_eventCreateWithoutFlowInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventCreateNestedOneWithoutFlowInput", {})
export class App_flow_eventCreateNestedOneWithoutFlowInput {
  @TypeGraphQL.Field(_type => App_flow_eventCreateWithoutFlowInput, {
    nullable: true
  })
  create?: App_flow_eventCreateWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventCreateOrConnectWithoutFlowInput, {
    nullable: true
  })
  connectOrCreate?: App_flow_eventCreateOrConnectWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: true
  })
  connect?: App_flow_eventWhereUniqueInput | undefined;
}
