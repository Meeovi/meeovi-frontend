import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { Order_line_itemOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_line_itemOrderByWithRelationAndSearchRelevanceInput";
import { Order_line_item_downloadOrderByRelevanceInput } from "../inputs/Order_line_item_downloadOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  access_granted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_line_item_downloadOrderByRelevanceInput | undefined;
}
