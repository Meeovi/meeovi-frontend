import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_pageOrderByWithRelationAndSearchRelevanceInput";
import { Cms_pageWhereInput } from "../../../inputs/Cms_pageWhereInput";
import { Cms_pageWhereUniqueInput } from "../../../inputs/Cms_pageWhereUniqueInput";
import { Cms_pageScalarFieldEnum } from "../../../../enums/Cms_pageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCms_pageOrThrowArgs {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_pageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "type" | "entity" | "preview_media_id" | "locked" | "css_class" | "config" | "created_at" | "updated_at"> | undefined;
}
