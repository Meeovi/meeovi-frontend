import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_responseOrderByRelevanceFieldEnum } from "../../enums/Adyen_payment_responseOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_responseOrderByRelevanceInput", {})
export class Adyen_payment_responseOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_responseOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"result_code" | "response">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
