import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Log_entryOrderByRelevanceFieldEnum } from "../../enums/Log_entryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Log_entryOrderByRelevanceInput", {})
export class Log_entryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Log_entryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"message" | "channel" | "context" | "extra">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
