import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationWhereInput } from "../../../inputs/App_cms_block_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_cms_block_translationArgs {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  where?: App_cms_block_translationWhereInput | undefined;
}
