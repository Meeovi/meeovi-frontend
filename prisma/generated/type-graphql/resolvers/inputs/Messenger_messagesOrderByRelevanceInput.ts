import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Messenger_messagesOrderByRelevanceFieldEnum } from "../../enums/Messenger_messagesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Messenger_messagesOrderByRelevanceInput", {})
export class Messenger_messagesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Messenger_messagesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"body" | "headers" | "queue_name">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
