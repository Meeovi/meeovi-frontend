import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configUpdateManyMutationInput } from "../../../inputs/App_configUpdateManyMutationInput";
import { App_configWhereInput } from "../../../inputs/App_configWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_configArgs {
  @TypeGraphQL.Field(_type => App_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_configUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_configWhereInput, {
    nullable: true
  })
  where?: App_configWhereInput | undefined;
}
