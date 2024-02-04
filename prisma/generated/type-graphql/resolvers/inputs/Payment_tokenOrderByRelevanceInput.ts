import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_tokenOrderByRelevanceFieldEnum } from "../../enums/Payment_tokenOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_tokenOrderByRelevanceInput", {})
export class Payment_tokenOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Payment_tokenOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "token"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
