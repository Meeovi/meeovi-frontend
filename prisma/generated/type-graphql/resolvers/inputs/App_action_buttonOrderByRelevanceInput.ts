import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonOrderByRelevanceFieldEnum } from "../../enums/App_action_buttonOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_action_buttonOrderByRelevanceInput", {})
export class App_action_buttonOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_action_buttonOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"entity" | "view" | "url" | "action">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
