import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateWithoutAppInput } from "../inputs/App_flow_actionCreateWithoutAppInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionCreateOrConnectWithoutAppInput", {})
export class App_flow_actionCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_actionCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_flow_actionCreateWithoutAppInput;
}
