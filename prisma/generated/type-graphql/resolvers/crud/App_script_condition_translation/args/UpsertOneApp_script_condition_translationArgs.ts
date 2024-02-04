import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationCreateInput } from "../../../inputs/App_script_condition_translationCreateInput";
import { App_script_condition_translationUpdateInput } from "../../../inputs/App_script_condition_translationUpdateInput";
import { App_script_condition_translationWhereUniqueInput } from "../../../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_condition_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateInput, {
    nullable: false
  })
  create!: App_script_condition_translationCreateInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateInput, {
    nullable: false
  })
  update!: App_script_condition_translationUpdateInput;
}
