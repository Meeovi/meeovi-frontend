import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_blockOrderByWithRelationAndSearchRelevanceInput";
import { Cms_blockWhereInput } from "../../../inputs/Cms_blockWhereInput";
import { Cms_blockWhereUniqueInput } from "../../../inputs/Cms_blockWhereUniqueInput";
import { Cms_blockScalarFieldEnum } from "../../../../enums/Cms_blockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_blockOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_blockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "cms_section_id" | "cms_section_version_id" | "position" | "section_position" | "type" | "name" | "locked" | "margin_top" | "margin_bottom" | "margin_left" | "margin_right" | "background_color" | "background_media_id" | "background_media_mode" | "visibility" | "css_class" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
