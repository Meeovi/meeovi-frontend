import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCountOrderByAggregateInput } from "../inputs/Mail_template_type_translationCountOrderByAggregateInput";
import { Mail_template_type_translationMaxOrderByAggregateInput } from "../inputs/Mail_template_type_translationMaxOrderByAggregateInput";
import { Mail_template_type_translationMinOrderByAggregateInput } from "../inputs/Mail_template_type_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_type_translationOrderByWithAggregationInput", {})
export class Mail_template_type_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_template_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_template_type_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_template_type_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_template_type_translationMinOrderByAggregateInput | undefined;
}
