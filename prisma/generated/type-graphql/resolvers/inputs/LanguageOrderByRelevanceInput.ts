import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageOrderByRelevanceFieldEnum } from "../../enums/LanguageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguageOrderByRelevanceInput", {})
export class LanguageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [LanguageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
