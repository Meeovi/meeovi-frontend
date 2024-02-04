import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationCreateInput } from "../../../inputs/App_script_condition_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationCreateInput, {
    nullable: false
  })
  data!: App_script_condition_translationCreateInput;
}
