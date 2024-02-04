import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockWhereUniqueInput } from "../../../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_blockWhereUniqueInput;
}
