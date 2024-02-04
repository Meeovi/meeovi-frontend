import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockOrderByRelevanceFieldEnum } from "../../enums/Cms_blockOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_blockOrderByRelevanceInput", {})
export class Cms_blockOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cms_blockOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"section_position" | "type" | "name" | "margin_top" | "margin_bottom" | "margin_left" | "margin_right" | "background_color" | "background_media_mode" | "visibility" | "css_class" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
