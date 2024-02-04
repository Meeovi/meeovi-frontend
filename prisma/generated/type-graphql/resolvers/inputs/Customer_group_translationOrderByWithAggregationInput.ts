import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCountOrderByAggregateInput } from "../inputs/Customer_group_translationCountOrderByAggregateInput";
import { Customer_group_translationMaxOrderByAggregateInput } from "../inputs/Customer_group_translationMaxOrderByAggregateInput";
import { Customer_group_translationMinOrderByAggregateInput } from "../inputs/Customer_group_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_group_translationOrderByWithAggregationInput", {})
export class Customer_group_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_group_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  registration_title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  registration_introduction?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  registration_only_company_registration?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  registration_seo_meta_description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_group_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_group_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_group_translationMinOrderByAggregateInput | undefined;
}
