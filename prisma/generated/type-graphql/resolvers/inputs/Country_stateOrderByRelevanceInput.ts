import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateOrderByRelevanceFieldEnum } from "../../enums/Country_stateOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_stateOrderByRelevanceInput", {})
export class Country_stateOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Country_stateOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "short_code"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
