import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationWhereUniqueInput } from "../../../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_cms_block_translationArgs {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_block_translationWhereUniqueInput;
}
