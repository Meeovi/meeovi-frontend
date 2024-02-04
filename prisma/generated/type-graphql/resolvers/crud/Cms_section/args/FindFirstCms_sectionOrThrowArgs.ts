import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_sectionOrderByWithRelationAndSearchRelevanceInput";
import { Cms_sectionWhereInput } from "../../../inputs/Cms_sectionWhereInput";
import { Cms_sectionWhereUniqueInput } from "../../../inputs/Cms_sectionWhereUniqueInput";
import { Cms_sectionScalarFieldEnum } from "../../../../enums/Cms_sectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCms_sectionOrThrowArgs {
  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  where?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_sectionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_sectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "cms_page_id" | "cms_page_version_id" | "position" | "type" | "name" | "locked" | "sizing_mode" | "mobile_behavior" | "background_color" | "background_media_id" | "background_media_mode" | "visibility" | "css_class" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
