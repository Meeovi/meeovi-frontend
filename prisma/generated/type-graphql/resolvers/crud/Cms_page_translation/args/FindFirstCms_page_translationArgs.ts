import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_page_translationOrderByWithRelationAndSearchRelevanceInput";
import { Cms_page_translationWhereInput } from "../../../inputs/Cms_page_translationWhereInput";
import { Cms_page_translationWhereUniqueInput } from "../../../inputs/Cms_page_translationWhereUniqueInput";
import { Cms_page_translationScalarFieldEnum } from "../../../../enums/Cms_page_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  where?: Cms_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_page_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_page_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"cms_page_id" | "cms_page_version_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
