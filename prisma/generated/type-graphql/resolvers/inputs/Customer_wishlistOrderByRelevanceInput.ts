import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistOrderByRelevanceFieldEnum } from "../../enums/Customer_wishlistOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlistOrderByRelevanceInput", {})
export class Customer_wishlistOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistOrderByRelevanceFieldEnum], {
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
