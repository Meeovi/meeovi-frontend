import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationOrderByRelevanceFieldEnum } from "../../enums/Product_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_translationOrderByRelevanceInput", {})
export class Product_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"meta_description" | "name" | "keywords" | "description" | "meta_title" | "pack_unit" | "custom_fields" | "slot_config" | "pack_unit_plural" | "custom_search_keywords">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
