import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionUpdateWithoutAppInput } from "../inputs/App_flow_actionUpdateWithoutAppInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionUpdateWithWhereUniqueWithoutAppInput", {})
export class App_flow_actionUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_flow_actionUpdateWithoutAppInput;
}
