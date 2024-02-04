import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestCountOrderByAggregateInput } from "../inputs/Klaviyo_job_cart_requestCountOrderByAggregateInput";
import { Klaviyo_job_cart_requestMaxOrderByAggregateInput } from "../inputs/Klaviyo_job_cart_requestMaxOrderByAggregateInput";
import { Klaviyo_job_cart_requestMinOrderByAggregateInput } from "../inputs/Klaviyo_job_cart_requestMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestOrderByWithAggregationInput", {})
export class Klaviyo_job_cart_requestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serialized_request?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Klaviyo_job_cart_requestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Klaviyo_job_cart_requestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Klaviyo_job_cart_requestMinOrderByAggregateInput | undefined;
}
