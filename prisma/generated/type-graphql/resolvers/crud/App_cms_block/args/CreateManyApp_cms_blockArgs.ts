import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockCreateManyInput } from "../../../inputs/App_cms_blockCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => [App_cms_blockCreateManyInput], {
    nullable: false
  })
  data!: App_cms_blockCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
