import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { Category_tagWhereInput } from "../inputs/Category_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { category_tagCategory_idCategory_version_idTag_idCompoundUniqueInput } from "../inputs/category_tagCategory_idCategory_version_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Category_tagWhereUniqueInput", {})
export class Category_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => category_tagCategory_idCategory_version_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  category_id_category_version_id_tag_id?: category_tagCategory_idCategory_version_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereInput], {
    nullable: true
  })
  AND?: Category_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereInput], {
    nullable: true
  })
  OR?: Category_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereInput], {
    nullable: true
  })
  NOT?: Category_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
