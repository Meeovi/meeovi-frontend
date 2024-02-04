import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationOrderByRelevanceFieldEnum } from "../../enums/Delivery_time_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_time_translationOrderByRelevanceInput", {})
export class Delivery_time_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
