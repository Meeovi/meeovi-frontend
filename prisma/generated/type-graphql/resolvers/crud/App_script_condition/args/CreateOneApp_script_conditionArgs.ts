import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionCreateInput } from "../../../inputs/App_script_conditionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => App_script_conditionCreateInput, {
    nullable: false
  })
  data!: App_script_conditionCreateInput;
}
