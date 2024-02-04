import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeOrderByRelevanceInput } from "../inputs/Number_rangeOrderByRelevanceInput";
import { Number_range_sales_channelOrderByRelationAggregateInput } from "../inputs/Number_range_sales_channelOrderByRelationAggregateInput";
import { Number_range_translationOrderByRelationAggregateInput } from "../inputs/Number_range_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_rangeOrderByWithRelationAndSearchRelevanceInput", {})
export class Number_rangeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  global?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  number_range_sales_channel?: Number_range_sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  number_range_translation?: Number_range_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Number_rangeOrderByRelevanceInput | undefined;
}
