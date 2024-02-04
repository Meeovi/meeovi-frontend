import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionOrderByRelevanceFieldEnum } from "../../enums/Cms_sectionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_sectionOrderByRelevanceInput", {})
export class Cms_sectionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cms_sectionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "name" | "sizing_mode" | "mobile_behavior" | "background_color" | "background_media_mode" | "visibility" | "css_class" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
