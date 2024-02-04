import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionWhereUniqueInput } from "../../../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_script_conditionOrThrowArgs {
  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_conditionWhereUniqueInput;
}
