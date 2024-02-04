import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_notificationOrderByRelevanceFieldEnum } from "../../enums/Adyen_notificationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_notificationOrderByRelevanceInput", {})
export class Adyen_notificationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_notificationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"pspreference" | "original_reference" | "merchant_reference" | "event_code" | "payment_method" | "amount_value" | "amount_currency" | "reason" | "additional_data" | "error_message">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
