import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateWithoutFlowInput } from "../inputs/App_flow_eventCreateWithoutFlowInput";
import { App_flow_eventUpdateWithoutFlowInput } from "../inputs/App_flow_eventUpdateWithoutFlowInput";
import { App_flow_eventWhereInput } from "../inputs/App_flow_eventWhereInput";

@TypeGraphQL.InputType("App_flow_eventUpsertWithoutFlowInput", {})
export class App_flow_eventUpsertWithoutFlowInput {
  @TypeGraphQL.Field(_type => App_flow_eventUpdateWithoutFlowInput, {
    nullable: false
  })
  update!: App_flow_eventUpdateWithoutFlowInput;

  @TypeGraphQL.Field(_type => App_flow_eventCreateWithoutFlowInput, {
    nullable: false
  })
  create!: App_flow_eventCreateWithoutFlowInput;

  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;
}
