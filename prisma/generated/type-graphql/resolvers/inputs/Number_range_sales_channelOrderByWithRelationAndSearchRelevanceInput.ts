import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Number_rangeOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_typeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Number_range_typeOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput", {})
export class Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  number_range?: Number_rangeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  number_range_type?: Number_range_typeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;
}
