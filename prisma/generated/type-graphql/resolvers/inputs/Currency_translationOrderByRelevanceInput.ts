import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationOrderByRelevanceFieldEnum } from "../../enums/Currency_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_translationOrderByRelevanceInput", {})
export class Currency_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Currency_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"short_name" | "name" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
