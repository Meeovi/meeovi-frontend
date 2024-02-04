import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionOrderByRelevanceFieldEnum } from "../../enums/Event_actionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_actionOrderByRelevanceInput", {})
export class Event_actionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Event_actionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"title" | "event_name" | "action_name" | "config" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
