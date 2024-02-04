import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CategoryOrderByWithRelationAndSearchRelevanceInput";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Main_categoryOrderByWithRelationAndSearchRelevanceInput", {})
export class Main_categoryOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  category?: CategoryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;
}
