import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceOrderByRelevanceFieldEnum } from "../../enums/Flow_sequenceOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Flow_sequenceOrderByRelevanceInput", {})
export class Flow_sequenceOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"action_name" | "config" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
