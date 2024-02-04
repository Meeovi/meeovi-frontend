import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationOrderByRelevanceFieldEnum } from "../../enums/App_flow_action_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_flow_action_translationOrderByRelevanceInput", {})
export class App_flow_action_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_flow_action_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"label" | "description" | "headline" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
