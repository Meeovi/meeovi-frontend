import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventOrderByRelevanceFieldEnum } from "../../enums/App_flow_eventOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_flow_eventOrderByRelevanceInput", {})
export class App_flow_eventOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_flow_eventOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "aware" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
