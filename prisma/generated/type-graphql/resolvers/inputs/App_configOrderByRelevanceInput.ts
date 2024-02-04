import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_configOrderByRelevanceFieldEnum } from "../../enums/App_configOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_configOrderByRelevanceInput", {})
export class App_configOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_configOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"key" | "value">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
