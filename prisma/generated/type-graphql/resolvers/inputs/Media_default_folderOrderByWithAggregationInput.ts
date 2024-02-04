import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderCountOrderByAggregateInput } from "../inputs/Media_default_folderCountOrderByAggregateInput";
import { Media_default_folderMaxOrderByAggregateInput } from "../inputs/Media_default_folderMaxOrderByAggregateInput";
import { Media_default_folderMinOrderByAggregateInput } from "../inputs/Media_default_folderMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_default_folderOrderByWithAggregationInput", {})
export class Media_default_folderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  association_fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Media_default_folderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_default_folderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_default_folderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_default_folderMinOrderByAggregateInput | undefined;
}
