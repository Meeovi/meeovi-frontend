import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationOrderByRelevanceFieldEnum } from "../../enums/IntegrationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationOrderByRelevanceInput", {})
export class IntegrationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [IntegrationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"access_key" | "secret_access_key" | "label" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
