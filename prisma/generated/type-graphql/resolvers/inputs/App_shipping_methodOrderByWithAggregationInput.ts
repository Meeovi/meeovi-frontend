import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCountOrderByAggregateInput } from "../inputs/App_shipping_methodCountOrderByAggregateInput";
import { App_shipping_methodMaxOrderByAggregateInput } from "../inputs/App_shipping_methodMaxOrderByAggregateInput";
import { App_shipping_methodMinOrderByAggregateInput } from "../inputs/App_shipping_methodMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_shipping_methodOrderByWithAggregationInput", {})
export class App_shipping_methodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_shipping_methodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_shipping_methodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_shipping_methodMinOrderByAggregateInput | undefined;
}
