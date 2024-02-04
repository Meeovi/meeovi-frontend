import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput {
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
  product_stream_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream?: Product_streamOrderByWithRelationAndSearchRelevanceInput | undefined;
}
