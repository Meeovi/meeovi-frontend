import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionWhereInput } from "../../../inputs/App_script_conditionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;
}
