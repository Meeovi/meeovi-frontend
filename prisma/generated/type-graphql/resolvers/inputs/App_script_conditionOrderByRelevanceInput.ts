import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionOrderByRelevanceFieldEnum } from "../../enums/App_script_conditionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_script_conditionOrderByRelevanceInput", {})
export class App_script_conditionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_script_conditionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"identifier" | "group" | "script" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
