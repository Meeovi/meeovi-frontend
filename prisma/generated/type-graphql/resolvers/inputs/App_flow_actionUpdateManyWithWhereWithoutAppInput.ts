import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionScalarWhereInput } from "../inputs/App_flow_actionScalarWhereInput";
import { App_flow_actionUpdateManyMutationInput } from "../inputs/App_flow_actionUpdateManyMutationInput";

@TypeGraphQL.InputType("App_flow_actionUpdateManyWithWhereWithoutAppInput", {})
export class App_flow_actionUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_flow_actionScalarWhereInput, {
    nullable: false
  })
  where!: App_flow_actionScalarWhereInput;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_actionUpdateManyMutationInput;
}
