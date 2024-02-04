import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrderOrderByWithRelationAndSearchRelevanceInput";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_tagOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_tagOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order?: OrderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationAndSearchRelevanceInput | undefined;
}
