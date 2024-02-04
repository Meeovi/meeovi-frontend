import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCountOrderByAggregateInput } from "../inputs/Mail_templateCountOrderByAggregateInput";
import { Mail_templateMaxOrderByAggregateInput } from "../inputs/Mail_templateMaxOrderByAggregateInput";
import { Mail_templateMinOrderByAggregateInput } from "../inputs/Mail_templateMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_templateOrderByWithAggregationInput", {})
export class Mail_templateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mail_template_type_id?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Mail_templateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_templateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_templateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_templateMinOrderByAggregateInput | undefined;
}
