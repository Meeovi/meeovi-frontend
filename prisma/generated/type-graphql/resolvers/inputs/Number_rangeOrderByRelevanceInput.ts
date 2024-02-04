import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeOrderByRelevanceFieldEnum } from "../../enums/Number_rangeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_rangeOrderByRelevanceInput", {})
export class Number_rangeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Number_rangeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "pattern"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
