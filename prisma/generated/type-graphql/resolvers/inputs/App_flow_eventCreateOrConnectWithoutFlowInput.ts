import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateWithoutFlowInput } from "../inputs/App_flow_eventCreateWithoutFlowInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventCreateOrConnectWithoutFlowInput", {})
export class App_flow_eventCreateOrConnectWithoutFlowInput {
  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_eventCreateWithoutFlowInput, {
    nullable: false
  })
  create!: App_flow_eventCreateWithoutFlowInput;
}
