import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonCreateInput } from "../../../inputs/App_action_buttonCreateInput";
import { App_action_buttonUpdateInput } from "../../../inputs/App_action_buttonUpdateInput";
import { App_action_buttonWhereUniqueInput } from "../../../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_buttonWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_buttonCreateInput, {
    nullable: false
  })
  create!: App_action_buttonCreateInput;

  @TypeGraphQL.Field(_type => App_action_buttonUpdateInput, {
    nullable: false
  })
  update!: App_action_buttonUpdateInput;
}
