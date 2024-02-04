import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCountOrderByAggregateInput } from "../inputs/Mail_template_translationCountOrderByAggregateInput";
import { Mail_template_translationMaxOrderByAggregateInput } from "../inputs/Mail_template_translationMaxOrderByAggregateInput";
import { Mail_template_translationMinOrderByAggregateInput } from "../inputs/Mail_template_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_translationOrderByWithAggregationInput", {})
export class Mail_template_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_template_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sender_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  subject?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  content_html?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  content_plain?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Mail_template_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_template_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_template_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_template_translationMinOrderByAggregateInput | undefined;
}
