import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockOrderByWithAggregationInput } from "../../../inputs/Cms_blockOrderByWithAggregationInput";
import { Cms_blockScalarWhereWithAggregatesInput } from "../../../inputs/Cms_blockScalarWhereWithAggregatesInput";
import { Cms_blockWhereInput } from "../../../inputs/Cms_blockWhereInput";
import { Cms_blockScalarFieldEnum } from "../../../../enums/Cms_blockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_blockOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "cms_section_id" | "cms_section_version_id" | "position" | "section_position" | "type" | "name" | "locked" | "margin_top" | "margin_bottom" | "margin_left" | "margin_right" | "background_color" | "background_media_id" | "background_media_mode" | "visibility" | "css_class" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_blockScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_blockScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
