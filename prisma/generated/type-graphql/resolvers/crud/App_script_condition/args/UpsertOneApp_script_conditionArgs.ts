import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionCreateInput } from "../../../inputs/App_script_conditionCreateInput";
import { App_script_conditionUpdateInput } from "../../../inputs/App_script_conditionUpdateInput";
import { App_script_conditionWhereUniqueInput } from "../../../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_conditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_conditionCreateInput, {
    nullable: false
  })
  create!: App_script_conditionCreateInput;

  @TypeGraphQL.Field(_type => App_script_conditionUpdateInput, {
    nullable: false
  })
  update!: App_script_conditionUpdateInput;
}
