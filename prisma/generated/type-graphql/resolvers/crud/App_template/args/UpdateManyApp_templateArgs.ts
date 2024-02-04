import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateUpdateManyMutationInput } from "../../../inputs/App_templateUpdateManyMutationInput";
import { App_templateWhereInput } from "../../../inputs/App_templateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_templateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  where?: App_templateWhereInput | undefined;
}
