import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionOrderByWithAggregationInput } from "../../../inputs/Cms_sectionOrderByWithAggregationInput";
import { Cms_sectionScalarWhereWithAggregatesInput } from "../../../inputs/Cms_sectionScalarWhereWithAggregatesInput";
import { Cms_sectionWhereInput } from "../../../inputs/Cms_sectionWhereInput";
import { Cms_sectionScalarFieldEnum } from "../../../../enums/Cms_sectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  where?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_sectionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "cms_page_id" | "cms_page_version_id" | "position" | "type" | "name" | "locked" | "sizing_mode" | "mobile_behavior" | "background_color" | "background_media_id" | "background_media_mode" | "visibility" | "css_class" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_sectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_sectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
