import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_tagOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_tagOrderByWithRelationAndSearchRelevanceInput {
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
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationAndSearchRelevanceInput | undefined;
}
