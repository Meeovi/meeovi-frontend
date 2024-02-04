import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Category_translationOrderByWithRelationAndSearchRelevanceInput";
import { Category_translationWhereInput } from "../../../inputs/Category_translationWhereInput";
import { Category_translationWhereUniqueInput } from "../../../inputs/Category_translationWhereUniqueInput";
import { Category_translationScalarFieldEnum } from "../../../../enums/Category_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCategory_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  where?: Category_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Category_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Category_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Category_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Category_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"category_id" | "category_version_id" | "language_id" | "name" | "breadcrumb" | "internal_link" | "link_new_tab" | "link_type" | "external_link" | "description" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "created_at" | "updated_at" | "slot_config"> | undefined;
}
