import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateOrderByRelevanceFieldEnum } from "../../enums/App_templateOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_templateOrderByRelevanceInput", {})
export class App_templateOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_templateOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"template" | "path">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
