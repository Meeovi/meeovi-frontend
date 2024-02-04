import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationWhereUniqueInput } from "../../../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_condition_translationWhereUniqueInput;
}
