import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryCountOrderByAggregateInput } from "../inputs/Customer_recoveryCountOrderByAggregateInput";
import { Customer_recoveryMaxOrderByAggregateInput } from "../inputs/Customer_recoveryMaxOrderByAggregateInput";
import { Customer_recoveryMinOrderByAggregateInput } from "../inputs/Customer_recoveryMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_recoveryOrderByWithAggregationInput", {})
export class Customer_recoveryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_recoveryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_recoveryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_recoveryMinOrderByAggregateInput | undefined;
}
