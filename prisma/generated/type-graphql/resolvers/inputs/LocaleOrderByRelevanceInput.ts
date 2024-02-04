import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleOrderByRelevanceFieldEnum } from "../../enums/LocaleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocaleOrderByRelevanceInput", {})
export class LocaleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [LocaleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "code"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
