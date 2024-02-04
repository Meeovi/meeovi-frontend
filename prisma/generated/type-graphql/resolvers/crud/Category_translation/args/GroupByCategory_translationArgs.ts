import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationOrderByWithAggregationInput } from "../../../inputs/Category_translationOrderByWithAggregationInput";
import { Category_translationScalarWhereWithAggregatesInput } from "../../../inputs/Category_translationScalarWhereWithAggregatesInput";
import { Category_translationWhereInput } from "../../../inputs/Category_translationWhereInput";
import { Category_translationScalarFieldEnum } from "../../../../enums/Category_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  where?: Category_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Category_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Category_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"category_id" | "category_version_id" | "language_id" | "name" | "breadcrumb" | "internal_link" | "link_new_tab" | "link_type" | "external_link" | "description" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "created_at" | "updated_at" | "slot_config">;

  @TypeGraphQL.Field(_type => Category_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Category_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
