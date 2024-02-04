import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCountOrderByAggregateInput } from "../inputs/Mail_header_footer_translationCountOrderByAggregateInput";
import { Mail_header_footer_translationMaxOrderByAggregateInput } from "../inputs/Mail_header_footer_translationMaxOrderByAggregateInput";
import { Mail_header_footer_translationMinOrderByAggregateInput } from "../inputs/Mail_header_footer_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_header_footer_translationOrderByWithAggregationInput", {})
export class Mail_header_footer_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_header_footer_id?: "asc" | "desc" | undefined;

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
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  header_html?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  header_plain?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  footer_html?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  footer_plain?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_header_footer_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_header_footer_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_header_footer_translationMinOrderByAggregateInput | undefined;
}
