import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailAvgOrderByAggregateInput } from "../inputs/Media_thumbnailAvgOrderByAggregateInput";
import { Media_thumbnailCountOrderByAggregateInput } from "../inputs/Media_thumbnailCountOrderByAggregateInput";
import { Media_thumbnailMaxOrderByAggregateInput } from "../inputs/Media_thumbnailMaxOrderByAggregateInput";
import { Media_thumbnailMinOrderByAggregateInput } from "../inputs/Media_thumbnailMinOrderByAggregateInput";
import { Media_thumbnailSumOrderByAggregateInput } from "../inputs/Media_thumbnailSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_thumbnailOrderByWithAggregationInput", {})
export class Media_thumbnailOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  width?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_thumbnailCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_thumbnailCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Media_thumbnailAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_thumbnailMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_thumbnailMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Media_thumbnailSumOrderByAggregateInput | undefined;
}
