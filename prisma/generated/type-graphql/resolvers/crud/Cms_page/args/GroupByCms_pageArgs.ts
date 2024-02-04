import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageOrderByWithAggregationInput } from "../../../inputs/Cms_pageOrderByWithAggregationInput";
import { Cms_pageScalarWhereWithAggregatesInput } from "../../../inputs/Cms_pageScalarWhereWithAggregatesInput";
import { Cms_pageWhereInput } from "../../../inputs/Cms_pageWhereInput";
import { Cms_pageScalarFieldEnum } from "../../../../enums/Cms_pageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_pageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "type" | "entity" | "preview_media_id" | "locked" | "css_class" | "config" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_pageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_pageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
