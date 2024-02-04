import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetOrderByRelevanceFieldEnum } from "../../enums/App_administration_snippetOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_administration_snippetOrderByRelevanceInput", {})
export class App_administration_snippetOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "value"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
