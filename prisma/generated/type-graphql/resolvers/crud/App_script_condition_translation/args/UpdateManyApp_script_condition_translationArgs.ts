import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationUpdateManyMutationInput } from "../../../inputs/App_script_condition_translationUpdateManyMutationInput";
import { App_script_condition_translationWhereInput } from "../../../inputs/App_script_condition_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_script_condition_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  where?: App_script_condition_translationWhereInput | undefined;
}
