import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_checkout_mappingOrderByRelevanceFieldEnum } from "../../enums/Klaviyo_checkout_mappingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_checkout_mappingOrderByRelevanceInput", {})
export class Klaviyo_checkout_mappingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"reference" | "mapping_table">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
