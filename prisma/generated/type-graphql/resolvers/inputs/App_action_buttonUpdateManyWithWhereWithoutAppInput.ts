import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonScalarWhereInput } from "../inputs/App_action_buttonScalarWhereInput";
import { App_action_buttonUpdateManyMutationInput } from "../inputs/App_action_buttonUpdateManyMutationInput";

@TypeGraphQL.InputType("App_action_buttonUpdateManyWithWhereWithoutAppInput", {})
export class App_action_buttonUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_action_buttonScalarWhereInput, {
    nullable: false
  })
  where!: App_action_buttonScalarWhereInput;

  @TypeGraphQL.Field(_type => App_action_buttonUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_action_buttonUpdateManyMutationInput;
}
