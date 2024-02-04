import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonWhereUniqueInput } from "../../../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_buttonWhereUniqueInput;
}
