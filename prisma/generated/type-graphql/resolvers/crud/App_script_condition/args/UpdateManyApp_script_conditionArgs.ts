import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionUpdateManyMutationInput } from "../../../inputs/App_script_conditionUpdateManyMutationInput";
import { App_script_conditionWhereInput } from "../../../inputs/App_script_conditionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => App_script_conditionUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_script_conditionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;
}
