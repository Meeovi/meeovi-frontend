import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateCreateInput } from "../../../inputs/App_templateCreateInput";
import { App_templateUpdateInput } from "../../../inputs/App_templateUpdateInput";
import { App_templateWhereUniqueInput } from "../../../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: false
  })
  where!: App_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_templateCreateInput, {
    nullable: false
  })
  create!: App_templateCreateInput;

  @TypeGraphQL.Field(_type => App_templateUpdateInput, {
    nullable: false
  })
  update!: App_templateUpdateInput;
}
