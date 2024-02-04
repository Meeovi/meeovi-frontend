import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnqueueOrderByRelevanceFieldEnum } from "../../enums/EnqueueOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EnqueueOrderByRelevanceInput", {})
export class EnqueueOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [EnqueueOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "body" | "headers" | "properties" | "queue" | "delivery_id">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
