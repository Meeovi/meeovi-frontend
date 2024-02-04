import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockCreateInput } from "../../../inputs/App_cms_blockCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockCreateInput, {
    nullable: false
  })
  data!: App_cms_blockCreateInput;
}
