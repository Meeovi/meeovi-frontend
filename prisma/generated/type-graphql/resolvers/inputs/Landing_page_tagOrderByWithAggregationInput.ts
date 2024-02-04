import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCountOrderByAggregateInput } from "../inputs/Landing_page_tagCountOrderByAggregateInput";
import { Landing_page_tagMaxOrderByAggregateInput } from "../inputs/Landing_page_tagMaxOrderByAggregateInput";
import { Landing_page_tagMinOrderByAggregateInput } from "../inputs/Landing_page_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_page_tagOrderByWithAggregationInput", {})
export class Landing_page_tagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Landing_page_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Landing_page_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Landing_page_tagMinOrderByAggregateInput | undefined;
}
