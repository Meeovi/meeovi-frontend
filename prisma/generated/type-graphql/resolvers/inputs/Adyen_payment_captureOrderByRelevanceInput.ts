import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureOrderByRelevanceFieldEnum } from "../../enums/Adyen_payment_captureOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_captureOrderByRelevanceInput", {})
export class Adyen_payment_captureOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_captureOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"psp_reference" | "source" | "status">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
