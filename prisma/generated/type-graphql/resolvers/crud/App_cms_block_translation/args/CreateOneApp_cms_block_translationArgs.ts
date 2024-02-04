import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationCreateInput } from "../../../inputs/App_cms_block_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_cms_block_translationArgs {
  @TypeGraphQL.Field(_type => App_cms_block_translationCreateInput, {
    nullable: false
  })
  data!: App_cms_block_translationCreateInput;
}
