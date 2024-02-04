import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodOrderByRelevanceFieldEnum } from "../../enums/Payment_methodOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_methodOrderByRelevanceInput", {})
export class Payment_methodOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Payment_methodOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"handler_identifier" | "technical_name">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
