import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configCreateInput } from "../../../inputs/App_configCreateInput";
import { App_configUpdateInput } from "../../../inputs/App_configUpdateInput";
import { App_configWhereUniqueInput } from "../../../inputs/App_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_configArgs {
  @TypeGraphQL.Field(_type => App_configWhereUniqueInput, {
    nullable: false
  })
  where!: App_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_configCreateInput, {
    nullable: false
  })
  create!: App_configCreateInput;

  @TypeGraphQL.Field(_type => App_configUpdateInput, {
    nullable: false
  })
  update!: App_configUpdateInput;
}
