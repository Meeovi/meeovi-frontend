import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationCreateManyInput } from "../../../inputs/App_cms_block_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_cms_block_translationArgs {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateManyInput], {
    nullable: false
  })
  data!: App_cms_block_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
