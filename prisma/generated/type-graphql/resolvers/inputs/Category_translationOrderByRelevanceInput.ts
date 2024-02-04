import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationOrderByRelevanceFieldEnum } from "../../enums/Category_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Category_translationOrderByRelevanceInput", {})
export class Category_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Category_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "breadcrumb" | "link_type" | "external_link" | "description" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "slot_config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
