import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateWithoutFlow_sequenceInput } from "../inputs/App_flow_actionCreateWithoutFlow_sequenceInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionCreateOrConnectWithoutFlow_sequenceInput", {})
export class App_flow_actionCreateOrConnectWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_actionCreateWithoutFlow_sequenceInput, {
    nullable: false
  })
  create!: App_flow_actionCreateWithoutFlow_sequenceInput;
}
