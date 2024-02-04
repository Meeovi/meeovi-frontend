import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryOrderByRelevanceFieldEnum } from "../../enums/CountryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountryOrderByRelevanceInput", {})
export class CountryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CountryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"iso" | "iso3" | "vat_id_pattern" | "customer_tax" | "company_tax" | "advanced_postal_code_pattern" | "default_postal_code_pattern">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
