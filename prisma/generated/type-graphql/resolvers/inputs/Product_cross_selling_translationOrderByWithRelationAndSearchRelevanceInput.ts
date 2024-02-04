import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_selling_translationOrderByRelevanceInput } from "../inputs/Product_cross_selling_translationOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_cross_selling_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_cross_selling_translationOrderByRelevanceInput | undefined;
}
