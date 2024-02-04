import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationOrderByRelevanceFieldEnum } from "../../enums/Locale_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Locale_translationOrderByRelevanceInput", {})
export class Locale_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Locale_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "territory" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
