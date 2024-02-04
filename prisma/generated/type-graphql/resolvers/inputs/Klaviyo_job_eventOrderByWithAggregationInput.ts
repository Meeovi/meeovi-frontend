import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventCountOrderByAggregateInput } from "../inputs/Klaviyo_job_eventCountOrderByAggregateInput";
import { Klaviyo_job_eventMaxOrderByAggregateInput } from "../inputs/Klaviyo_job_eventMaxOrderByAggregateInput";
import { Klaviyo_job_eventMinOrderByAggregateInput } from "../inputs/Klaviyo_job_eventMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_job_eventOrderByWithAggregationInput", {})
export class Klaviyo_job_eventOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  happened_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Klaviyo_job_eventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Klaviyo_job_eventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Klaviyo_job_eventMinOrderByAggregateInput | undefined;
}
