import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationOrderByRelevanceFieldEnum } from "../../enums/App_action_button_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_action_button_translationOrderByRelevanceInput", {})
export class App_action_button_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_action_button_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "label"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
