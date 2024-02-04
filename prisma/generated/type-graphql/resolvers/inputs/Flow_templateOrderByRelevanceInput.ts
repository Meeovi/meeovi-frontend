import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_templateOrderByRelevanceFieldEnum } from "../../enums/Flow_templateOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Flow_templateOrderByRelevanceInput", {})
export class Flow_templateOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Flow_templateOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
