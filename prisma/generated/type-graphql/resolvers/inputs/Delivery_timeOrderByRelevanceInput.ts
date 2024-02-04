import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeOrderByRelevanceFieldEnum } from "../../enums/Delivery_timeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_timeOrderByRelevanceInput", {})
export class Delivery_timeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Delivery_timeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "unit"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
