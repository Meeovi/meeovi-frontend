import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationOrderByWithAggregationInput } from "../../../inputs/Cms_page_translationOrderByWithAggregationInput";
import { Cms_page_translationScalarWhereWithAggregatesInput } from "../../../inputs/Cms_page_translationScalarWhereWithAggregatesInput";
import { Cms_page_translationWhereInput } from "../../../inputs/Cms_page_translationWhereInput";
import { Cms_page_translationScalarFieldEnum } from "../../../../enums/Cms_page_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  where?: Cms_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_page_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"cms_page_id" | "cms_page_version_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_page_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_page_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
