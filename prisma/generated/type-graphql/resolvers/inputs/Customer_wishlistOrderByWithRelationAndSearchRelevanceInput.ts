import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomerOrderByWithRelationAndSearchRelevanceInput";
import { Customer_wishlistOrderByRelevanceInput } from "../inputs/Customer_wishlistOrderByRelevanceInput";
import { Customer_wishlist_productOrderByRelationAggregateInput } from "../inputs/Customer_wishlist_productOrderByRelationAggregateInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlistOrderByWithRelationAndSearchRelevanceInput", {})
export class Customer_wishlistOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer?: CustomerOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Customer_wishlistOrderByRelevanceInput | undefined;
}
