import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomerOrderByWithRelationAndSearchRelevanceInput";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_tagOrderByWithRelationAndSearchRelevanceInput", {})
export class Customer_tagOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer?: CustomerOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationAndSearchRelevanceInput | undefined;
}
