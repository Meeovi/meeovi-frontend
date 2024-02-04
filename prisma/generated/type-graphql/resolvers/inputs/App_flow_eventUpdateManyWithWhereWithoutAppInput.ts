import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventScalarWhereInput } from "../inputs/App_flow_eventScalarWhereInput";
import { App_flow_eventUpdateManyMutationInput } from "../inputs/App_flow_eventUpdateManyMutationInput";

@TypeGraphQL.InputType("App_flow_eventUpdateManyWithWhereWithoutAppInput", {})
export class App_flow_eventUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_eventScalarWhereInput, {
    nullable: false
  })
  where!: App_flow_eventScalarWhereInput;

  @TypeGraphQL.Field(_type => App_flow_eventUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_eventUpdateManyMutationInput;
}
