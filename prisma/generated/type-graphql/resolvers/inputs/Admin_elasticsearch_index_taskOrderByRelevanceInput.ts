import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Admin_elasticsearch_index_taskOrderByRelevanceFieldEnum } from "../../enums/Admin_elasticsearch_index_taskOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskOrderByRelevanceInput", {})
export class Admin_elasticsearch_index_taskOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskOrderByRelevanceFieldEnum], {
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
