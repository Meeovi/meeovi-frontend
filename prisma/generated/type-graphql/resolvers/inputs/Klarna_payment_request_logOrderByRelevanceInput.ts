import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_payment_request_logOrderByRelevanceFieldEnum } from "../../enums/Klarna_payment_request_logOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klarna_payment_request_logOrderByRelevanceInput", {})
export class Klarna_payment_request_logOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klarna_payment_request_logOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"klarna_order_id" | "call_type" | "request" | "response" | "idempotency_key">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
