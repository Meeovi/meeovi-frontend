import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_tokenOrderByRelevanceInput } from "../inputs/Payment_tokenOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_tokenOrderByWithRelationAndSearchRelevanceInput", {})
export class Payment_tokenOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expires?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Payment_tokenOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Payment_tokenOrderByRelevanceInput | undefined;
}
