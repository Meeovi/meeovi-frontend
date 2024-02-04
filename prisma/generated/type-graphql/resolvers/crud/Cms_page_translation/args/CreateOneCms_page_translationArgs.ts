import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationCreateInput } from "../../../inputs/Cms_page_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationCreateInput, {
    nullable: false
  })
  data!: Cms_page_translationCreateInput;
}
