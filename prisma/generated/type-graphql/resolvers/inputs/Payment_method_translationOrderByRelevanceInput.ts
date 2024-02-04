import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationOrderByRelevanceFieldEnum } from "../../enums/Payment_method_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_method_translationOrderByRelevanceInput", {})
export class Payment_method_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "distinguishable_name" | "description" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
