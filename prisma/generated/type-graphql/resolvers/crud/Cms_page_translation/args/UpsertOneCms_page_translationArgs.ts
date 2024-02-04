import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationCreateInput } from "../../../inputs/Cms_page_translationCreateInput";
import { Cms_page_translationUpdateInput } from "../../../inputs/Cms_page_translationUpdateInput";
import { Cms_page_translationWhereUniqueInput } from "../../../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateInput, {
    nullable: false
  })
  create!: Cms_page_translationCreateInput;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateInput, {
    nullable: false
  })
  update!: Cms_page_translationUpdateInput;
}
