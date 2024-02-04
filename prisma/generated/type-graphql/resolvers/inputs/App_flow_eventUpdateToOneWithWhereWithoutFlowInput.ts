import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventUpdateWithoutFlowInput } from "../inputs/App_flow_eventUpdateWithoutFlowInput";
import { App_flow_eventWhereInput } from "../inputs/App_flow_eventWhereInput";

@TypeGraphQL.InputType("App_flow_eventUpdateToOneWithWhereWithoutFlowInput", {})
export class App_flow_eventUpdateToOneWithWhereWithoutFlowInput {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventUpdateWithoutFlowInput, {
    nullable: false
  })
  data!: App_flow_eventUpdateWithoutFlowInput;
}
