import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CategoryOrderByWithRelationAndSearchRelevanceInput";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_category_treeOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_category_treeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  category?: CategoryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;
}
