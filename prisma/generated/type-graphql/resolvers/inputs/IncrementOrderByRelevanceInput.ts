import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncrementOrderByRelevanceFieldEnum } from "../../enums/IncrementOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncrementOrderByRelevanceInput", {})
export class IncrementOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [IncrementOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"pool" | "cluster" | "key">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
