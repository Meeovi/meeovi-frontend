import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeOrderByRelevanceFieldEnum } from "../../enums/Number_range_typeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_typeOrderByRelevanceInput", {})
export class Number_range_typeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Number_range_typeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "technical_name"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
