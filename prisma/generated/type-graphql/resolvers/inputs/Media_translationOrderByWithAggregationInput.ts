import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCountOrderByAggregateInput } from "../inputs/Media_translationCountOrderByAggregateInput";
import { Media_translationMaxOrderByAggregateInput } from "../inputs/Media_translationMaxOrderByAggregateInput";
import { Media_translationMinOrderByAggregateInput } from "../inputs/Media_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_translationOrderByWithAggregationInput", {})
export class Media_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  alt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_translationMinOrderByAggregateInput | undefined;
}
