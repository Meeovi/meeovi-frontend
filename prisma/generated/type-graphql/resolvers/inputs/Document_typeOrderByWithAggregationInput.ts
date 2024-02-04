import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCountOrderByAggregateInput } from "../inputs/Document_typeCountOrderByAggregateInput";
import { Document_typeMaxOrderByAggregateInput } from "../inputs/Document_typeMaxOrderByAggregateInput";
import { Document_typeMinOrderByAggregateInput } from "../inputs/Document_typeMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_typeOrderByWithAggregationInput", {})
export class Document_typeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  technical_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Document_typeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Document_typeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Document_typeMinOrderByAggregateInput | undefined;
}
