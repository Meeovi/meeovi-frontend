import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageOrderByRelevanceFieldEnum } from "../../enums/Cms_pageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_pageOrderByRelevanceInput", {})
export class Cms_pageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cms_pageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "entity" | "css_class" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
