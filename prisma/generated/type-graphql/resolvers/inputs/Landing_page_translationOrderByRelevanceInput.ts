import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationOrderByRelevanceFieldEnum } from "../../enums/Landing_page_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_page_translationOrderByRelevanceInput", {})
export class Landing_page_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Landing_page_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "url" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "slot_config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
