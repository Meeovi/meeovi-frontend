import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureOrderByRelevanceFieldEnum } from "../../enums/Order_transaction_captureOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_captureOrderByRelevanceInput", {})
export class Order_transaction_captureOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_transaction_captureOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"external_reference" | "amount" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
