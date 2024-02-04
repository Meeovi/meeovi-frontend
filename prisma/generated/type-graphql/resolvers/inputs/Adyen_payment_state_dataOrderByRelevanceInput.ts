import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_state_dataOrderByRelevanceFieldEnum } from "../../enums/Adyen_payment_state_dataOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_state_dataOrderByRelevanceInput", {})
export class Adyen_payment_state_dataOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"token" | "state_data">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
