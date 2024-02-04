import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonCreateInput } from "../../../inputs/App_action_buttonCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => App_action_buttonCreateInput, {
    nullable: false
  })
  data!: App_action_buttonCreateInput;
}
