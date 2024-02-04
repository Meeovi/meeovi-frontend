import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionOrderByRelevanceFieldEnum } from "../../enums/Order_transactionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transactionOrderByRelevanceInput", {})
export class Order_transactionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_transactionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"amount" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
