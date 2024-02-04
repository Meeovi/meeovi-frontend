import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateManyApp_flow_actionInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateManyApp_flow_actionInputEnvelope", {})
export class App_flow_action_translationCreateManyApp_flow_actionInputEnvelope {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateManyApp_flow_actionInput], {
    nullable: false
  })
  data!: App_flow_action_translationCreateManyApp_flow_actionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
