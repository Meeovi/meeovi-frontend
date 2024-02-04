import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonWhereInput } from "../../../inputs/App_action_buttonWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  where?: App_action_buttonWhereInput | undefined;
}
