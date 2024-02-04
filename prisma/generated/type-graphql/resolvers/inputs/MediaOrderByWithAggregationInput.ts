import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaAvgOrderByAggregateInput } from "../inputs/MediaAvgOrderByAggregateInput";
import { MediaCountOrderByAggregateInput } from "../inputs/MediaCountOrderByAggregateInput";
import { MediaMaxOrderByAggregateInput } from "../inputs/MediaMaxOrderByAggregateInput";
import { MediaMinOrderByAggregateInput } from "../inputs/MediaMinOrderByAggregateInput";
import { MediaSumOrderByAggregateInput } from "../inputs/MediaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MediaOrderByWithAggregationInput", {})
export class MediaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_folder_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mime_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_extension?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_size?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  thumbnails_ro?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  private?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  uploaded_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => MediaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MediaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MediaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MediaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MediaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MediaSumOrderByAggregateInput | undefined;
}
