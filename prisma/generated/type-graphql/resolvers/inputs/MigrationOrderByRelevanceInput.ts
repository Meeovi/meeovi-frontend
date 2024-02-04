import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MigrationOrderByRelevanceFieldEnum } from "../../enums/MigrationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MigrationOrderByRelevanceInput", {})
export class MigrationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MigrationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"class" | "message">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
