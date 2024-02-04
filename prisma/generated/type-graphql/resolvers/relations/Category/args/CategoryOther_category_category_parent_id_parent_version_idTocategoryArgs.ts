import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CategoryOrderByWithRelationAndSearchRelevanceInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CategoryOther_category_category_parent_id_parent_version_idTocategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "auto_increment" | "parent_id" | "parent_version_id" | "media_id" | "cms_page_id" | "cms_page_version_id" | "product_stream_id" | "product_assignment_type" | "path" | "after_category_id" | "after_category_version_id" | "level" | "active" | "child_count" | "display_nested_products" | "visible" | "type" | "created_at" | "updated_at" | "custom_entity_type_id"> | undefined;
}
