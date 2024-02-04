import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnail_sizeAvgOrderByAggregateInput } from "../inputs/Media_thumbnail_sizeAvgOrderByAggregateInput";
import { Media_thumbnail_sizeCountOrderByAggregateInput } from "../inputs/Media_thumbnail_sizeCountOrderByAggregateInput";
import { Media_thumbnail_sizeMaxOrderByAggregateInput } from "../inputs/Media_thumbnail_sizeMaxOrderByAggregateInput";
import { Media_thumbnail_sizeMinOrderByAggregateInput } from "../inputs/Media_thumbnail_sizeMinOrderByAggregateInput";
import { Media_thumbnail_sizeSumOrderByAggregateInput } from "../inputs/Media_thumbnail_sizeSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_thumbnail_sizeOrderByWithAggregationInput", {})
export class Media_thumbnail_sizeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_thumbnail_sizeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Media_thumbnail_sizeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_thumbnail_sizeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_thumbnail_sizeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Media_thumbnail_sizeSumOrderByAggregateInput | undefined;
}
