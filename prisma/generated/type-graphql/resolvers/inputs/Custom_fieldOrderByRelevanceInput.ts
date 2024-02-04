import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldOrderByRelevanceFieldEnum } from "../../enums/Custom_fieldOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_fieldOrderByRelevanceInput", {})
export class Custom_fieldOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Custom_fieldOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "type" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
