import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlOrderByWithAggregationInput } from "../../../inputs/Seo_urlOrderByWithAggregationInput";
import { Seo_urlScalarWhereWithAggregatesInput } from "../../../inputs/Seo_urlScalarWhereWithAggregatesInput";
import { Seo_urlWhereInput } from "../../../inputs/Seo_urlWhereInput";
import { Seo_urlScalarFieldEnum } from "../../../../enums/Seo_urlScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlWhereInput, {
    nullable: true
  })
  where?: Seo_urlWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Seo_urlOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Seo_urlOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Seo_urlScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "language_id" | "sales_channel_id" | "foreign_key" | "route_name" | "path_info" | "seo_path_info" | "is_canonical" | "is_modified" | "is_deleted" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Seo_urlScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Seo_urlScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
