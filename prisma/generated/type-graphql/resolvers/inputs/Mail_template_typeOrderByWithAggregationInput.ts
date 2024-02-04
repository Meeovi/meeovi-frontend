import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCountOrderByAggregateInput } from "../inputs/Mail_template_typeCountOrderByAggregateInput";
import { Mail_template_typeMaxOrderByAggregateInput } from "../inputs/Mail_template_typeMaxOrderByAggregateInput";
import { Mail_template_typeMinOrderByAggregateInput } from "../inputs/Mail_template_typeMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_typeOrderByWithAggregationInput", {})
export class Mail_template_typeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  technical_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  available_entities?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  template_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_template_typeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_template_typeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_template_typeMinOrderByAggregateInput | undefined;
}
