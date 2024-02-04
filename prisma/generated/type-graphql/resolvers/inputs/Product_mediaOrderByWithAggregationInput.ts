import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaAvgOrderByAggregateInput } from "../inputs/Product_mediaAvgOrderByAggregateInput";
import { Product_mediaCountOrderByAggregateInput } from "../inputs/Product_mediaCountOrderByAggregateInput";
import { Product_mediaMaxOrderByAggregateInput } from "../inputs/Product_mediaMaxOrderByAggregateInput";
import { Product_mediaMinOrderByAggregateInput } from "../inputs/Product_mediaMinOrderByAggregateInput";
import { Product_mediaSumOrderByAggregateInput } from "../inputs/Product_mediaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_mediaOrderByWithAggregationInput", {})
export class Product_mediaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Product_mediaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_mediaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_mediaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_mediaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_mediaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_mediaSumOrderByAggregateInput | undefined;
}
