import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productOrderByRelevanceFieldEnum } from "../../enums/Customer_wishlist_productOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlist_productOrderByRelevanceInput", {})
export class Customer_wishlist_productOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "custom_fields"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
