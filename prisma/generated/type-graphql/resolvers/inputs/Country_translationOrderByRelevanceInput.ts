import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationOrderByRelevanceFieldEnum } from "../../enums/Country_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_translationOrderByRelevanceInput", {})
export class Country_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Country_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "address_format" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
