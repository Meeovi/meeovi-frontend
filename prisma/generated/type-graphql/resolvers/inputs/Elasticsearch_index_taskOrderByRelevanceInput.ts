import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Elasticsearch_index_taskOrderByRelevanceFieldEnum } from "../../enums/Elasticsearch_index_taskOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Elasticsearch_index_taskOrderByRelevanceInput", {})
export class Elasticsearch_index_taskOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"index" | "alias" | "entity">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
