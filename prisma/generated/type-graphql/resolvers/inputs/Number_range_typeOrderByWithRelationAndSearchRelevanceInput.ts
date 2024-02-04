import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelOrderByRelationAggregateInput } from "../inputs/Number_range_sales_channelOrderByRelationAggregateInput";
import { Number_range_typeOrderByRelevanceInput } from "../inputs/Number_range_typeOrderByRelevanceInput";
import { Number_range_type_translationOrderByRelationAggregateInput } from "../inputs/Number_range_type_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_typeOrderByWithRelationAndSearchRelevanceInput", {})
export class Number_range_typeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  technical_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  global?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Number_range_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Number_range_typeOrderByRelevanceInput | undefined;
}
