import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundOrderByRelevanceFieldEnum } from "../../enums/Adyen_refundOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_refundOrderByRelevanceInput", {})
export class Adyen_refundOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_refundOrderByRelevanceFieldEnum], {
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
