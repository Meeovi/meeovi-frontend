import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockCreateInput } from "../../../inputs/App_cms_blockCreateInput";
import { App_cms_blockUpdateInput } from "../../../inputs/App_cms_blockUpdateInput";
import { App_cms_blockWhereUniqueInput } from "../../../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_cms_blockCreateInput, {
    nullable: false
  })
  create!: App_cms_blockCreateInput;

  @TypeGraphQL.Field(_type => App_cms_blockUpdateInput, {
    nullable: false
  })
  update!: App_cms_blockUpdateInput;
}
