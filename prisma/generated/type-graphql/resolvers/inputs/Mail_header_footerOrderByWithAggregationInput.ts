import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerCountOrderByAggregateInput } from "../inputs/Mail_header_footerCountOrderByAggregateInput";
import { Mail_header_footerMaxOrderByAggregateInput } from "../inputs/Mail_header_footerMaxOrderByAggregateInput";
import { Mail_header_footerMinOrderByAggregateInput } from "../inputs/Mail_header_footerMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_header_footerOrderByWithAggregationInput", {})
export class Mail_header_footerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  system_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_header_footerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_header_footerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_header_footerMinOrderByAggregateInput | undefined;
}
