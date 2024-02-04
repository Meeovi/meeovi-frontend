import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventUpdateWithoutAppInput } from "../inputs/App_flow_eventUpdateWithoutAppInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventUpdateWithWhereUniqueWithoutAppInput", {})
export class App_flow_eventUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_eventUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_flow_eventUpdateWithoutAppInput;
}
