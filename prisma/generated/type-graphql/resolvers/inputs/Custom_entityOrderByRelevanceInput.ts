import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityOrderByRelevanceFieldEnum } from "../../enums/Custom_entityOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_entityOrderByRelevanceInput", {})
export class Custom_entityOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Custom_entityOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "fields" | "flags" | "label_property">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
