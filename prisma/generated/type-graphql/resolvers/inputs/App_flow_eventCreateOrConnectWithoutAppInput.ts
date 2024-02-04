import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateWithoutAppInput } from "../inputs/App_flow_eventCreateWithoutAppInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventCreateOrConnectWithoutAppInput", {})
export class App_flow_eventCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_eventCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_flow_eventCreateWithoutAppInput;
}
