import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByRelevanceFieldEnum } from "../../enums/AppOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppOrderByRelevanceInput", {})
export class AppOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [AppOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "path" | "author" | "copyright" | "license" | "privacy" | "version" | "base_app_url" | "app_secret" | "modules" | "main_module" | "cookies" | "allowed_hosts">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
