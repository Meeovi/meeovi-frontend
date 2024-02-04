import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionOrderByRelevanceFieldEnum } from "../../enums/App_flow_actionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_flow_actionOrderByRelevanceInput", {})
export class App_flow_actionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_flow_actionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "badge" | "url" | "parameters" | "config" | "headers" | "requirements" | "sw_icon">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
