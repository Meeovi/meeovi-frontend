import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { Product_feature_setOrderByRelevanceInput } from "../inputs/Product_feature_setOrderByRelevanceInput";
import { Product_feature_set_translationOrderByRelationAggregateInput } from "../inputs/Product_feature_set_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_feature_setOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_feature_setOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  features?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  product?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_feature_setOrderByRelevanceInput | undefined;
}
