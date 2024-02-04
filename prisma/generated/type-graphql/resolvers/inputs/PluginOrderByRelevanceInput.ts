import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginOrderByRelevanceFieldEnum } from "../../enums/PluginOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PluginOrderByRelevanceInput", {})
export class PluginOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PluginOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "base_class" | "composer_name" | "path" | "autoload" | "author" | "copyright" | "license" | "version" | "upgrade_version">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
